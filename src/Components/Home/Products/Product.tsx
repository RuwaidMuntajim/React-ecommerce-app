import { FC } from 'react';
import sofa from "../../../Assets/Images/sofa.jpg"
import { commerce } from '../../../lib/commerce';

export interface productProp {
  product: {
    name: string,
    imgURL: string,
    key: string,
    price: string,
  }
  
}

const Product:FC<productProp> = ({product}) => {

  let cartAddItem: (id: string) => Promise<void>

  cartAddItem = async(id) => {
    commerce.cart.add(id, 1)
  }

  return (
    <div key={product.key} className='product m-1 bg-gray-100 rounded-lg gap-3'>
      <img src={product.imgURL} height={186} width={314} alt="sofa" className="rounded-lg" />
        
      <div className='flex flex-col items-center justify-center mb-3 font-semibold text-xs'>
        <div className='p-2'>
            <p className='break-word text-center text-sm md:text-lg lg:text-xl'>{product.name}</p>
        </div>
        <p className="text-base font-bold text-center md:text-xl lg:text-2xl">{product.price}</p>
          <div className='flex items-center justify-between p-2 gap-y-2'>
              
              <div className="flex flex-col items-center">
                  <button onClick={() => cartAddItem(product.key)} className='bg-gray-200 md:text-sm px-3 lg:px-4 py-1 my-1 font-semibold rounded-full text-black'>
                      Add to cart
                  </button>
                  <button className='bg-black md:text-sm px-3 lg:px-4 py-1 my-1 font-semibold rounded-full text-white'>
                      Buy now
                  </button>
              </div>
              
          </div>
          <p className='text-xs md:text-sm text-center text-green-400'>We're stocked. Don't wait</p>
          
      </div>
    </div>
  );
};

export default Product;
