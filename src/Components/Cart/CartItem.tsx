import { FC, useEffect } from 'react';
import iphone from "../../Assets/Images/iphone.jpg" 
import { cartItemObject } from './Cart';

interface cartItemProp {
  cartItem: cartItemObject,
  addCartItem: (id:string, amount: number) => Promise<void>
  removeCartItem: (id: string) => Promise<void>
}



const CartItem:FC<cartItemProp> = ({cartItem, addCartItem, removeCartItem}) => {

  useEffect(() => {console.log(cartItem.key)}, [])
  return (
    <div key={cartItem.key} className='product m-1 bg-gray-100 rounded-md'>
      <img src={cartItem.imgURL} alt="sofa" height={186} width={314} className="rounded-md" />
        
        <div className='flex flex-col font-semibold text-xs'>
          <div className='p-2'>
              <p className='break-word text-base md:text-lg'>{cartItem.name}</p>
          </div>
            <div className='flex flex-col items-start p-2'>
                <p className="text-lg md:text-xl font-bold">{cartItem.lineTotal.formatted_with_symbol}</p>
                <div className="flex flex-col items-start">
                    <div className='flex items-center justify-center bg-gray-200 my-1 font-black rounded-xl'>
                        <button onClick={() => addCartItem(cartItem.key, cartItem.quantity + 1)} className='h-full w-full px-3 py-1 rounded-full bg-black text-white'>+</button>
                        <p className='h-full w-full px-3 py-1 text-black'>{cartItem.quantity}</p>
                        <button onClick={() => addCartItem(cartItem.key, cartItem.quantity - 1)} className='h-full w-full px-3 py-1 rounded-full bg-black text-white'>-</button>
                    </div>
                    <button onClick={() => removeCartItem(cartItem.key)} className='bg-gray-200 px-3 py-1 my-1 font-bold rounded-xl text-red-500'>
                        Remove item
                    </button>
                </div>
            
            </div>
        </div>
    </div>
  );
};

export default CartItem;
