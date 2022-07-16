
import { FC, useState, useEffect } from 'react';
import cart from "../../Assets/Images/cart.png"
import { commerce } from '../../lib/commerce';
import CartItem from './CartItem';

//interfaces
export interface cartItemPriceObject {
  formatted: string,
  formatted_with_code: string,
  formatted_with_symbol: string
}

export interface lineTotalPriceObject {
  formatted: string,
  formatted_with_code: string,
  formatted_with_symbol: string
}

export interface cartItemObject {
  name: string,
  price: cartItemPriceObject,
  description?: string,
  imgURL?: string
  key: string,
  lineTotal: lineTotalPriceObject,
  quantity: number
}


interface cartObj {
  id: string,
  line_items: cartItemObject[],
  subtotal?: string,
  total_items: number,
  total_unique_items: number,
}

const Cart:FC = () => {

  const [myCart, setMyCart] = useState<null | cartObj>(null)
  
  let getCart: () => Promise<cartObj>
  let addCartItem: (id:string, amount: number) => Promise<void>
  let removeCartItem: (id: string) => Promise<void>
  let emptyCart: () => Promise<void>


  getCart = async () => {
    const cart = await commerce.cart.retrieve();
  
    
    let cart_items: cartItemObject[] = []

    //red Alert!

    cart.line_items.forEach(item => cart_items.push({
      key: item.id,
      name: item.name,

      price: {
        formatted: item.price.formatted,
        formatted_with_code: item.price.formatted_with_code,
        formatted_with_symbol: item.price.formatted_with_symbol
      },

      lineTotal: {
        formatted: item.line_total.formatted,
        formatted_with_code: item.line_total.formatted_with_code,
        formatted_with_symbol: item.line_total.formatted_with_symbol
      },

      imgURL: item.media.source,
      quantity: item.quantity
    }))

    return {
      id: cart.id,
      line_items: cart_items,
      subtotal: cart.subtotal.formatted_with_symbol,  
      total_items: cart.total_items,
      total_unique_items: cart.total_unique_items
    }
    
  }
  addCartItem = async (id, amount) => {
    await commerce.cart.update(id, {quantity: amount})
    //.then(() => getCart().then(cart => setMyCart(cart)));
    const cart = await getCart()
    setMyCart(cart)
  }

  removeCartItem = async (id) => {
    await commerce.cart.remove(id);
    await getCart().then(cart => setMyCart(cart));
  }

  emptyCart = async() => {
    await commerce.cart.empty();
    await getCart().then(cart => setMyCart(cart));
  }

  useEffect(() => {
    getCart()
    .then((cart) => { 
      setMyCart(cart)
    })
    
  }, [])   




  return (  
    <div className='Cart font-semibold'>
      <div className='flex flex-col xs:flex-row items-center  xs:justify-between md:mx-16 lg:mx-20'>
        <div className='text-4xl sm:text-6xl lg:text-7xl font-semibold flex items-center justify-center gap-1 sm:gap-2'>
            <img src={cart} className="h-24 w-24 sm:h-28 sm:w-28 object-cover"/>
            <div className='flex flex-col justify-center items-center'>
              <p>My Cart</p>
              <hr className='w-40 sm:w-56 sm:my-2' style={{border: "1px solid black"}}/>
            </div>
        </div>
        <div className='cost-related flex flex-col items-center justify-center gap-1'>
          <p className='font-bold text-lg sm:text-xl'>Total: {myCart ? myCart.subtotal: "Loading"}</p>
          <div className="flex flex-col items-center md:items-end justify-center gap-1">
            <button className='bg-black text-white text-xs sm:text-sm  rounded-full px-3 py-1.5 font-semibold'>Proceed</button>
            <button onClick={emptyCart} className='bg-black text-white text-xs sm:text-sm  rounded-full px-3 py-1.5 font-semibold'>Empty cart</button>
          </div>
          
        </div>
      </div>
      
      <div className='cartItems grid grid-cols-1 xs:grid-cols-3 gap-1 lg:gap-5 p-2 mx-6 md:mx-8 lg:mx-16'>
        {myCart && myCart.line_items.length > 0 && myCart?.line_items.map(cartItem => (
          <CartItem cartItem={cartItem} addCartItem={addCartItem} removeCartItem={removeCartItem}/>
        ))}
      </div>
    </div>
      
  )
};

export default Cart;
