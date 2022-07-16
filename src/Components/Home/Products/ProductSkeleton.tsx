import sofa from '../../../Assets/Images/sofa.jpg'

const ProductSkeleton = () => {
  return (
    <div>
    <div className='product m-1 bg-gray-100 rounded-lg gap-3 animate-pulse'>
      
        
      <div className='flex flex-col items-center justify-center mb-3 font-semibold text-xs'>
        <div className='p-2'>
            <p className='break-word text-center text-sm md:text-lg lg:text-xl'>Single seated sofa</p>
        </div>
        <p className="text-base font-bold text-center md:text-xl lg:text-2xl">$500(+VAT)</p>
          <div className='flex items-center justify-between p-2 gap-y-2'>
              
              <div className="flex flex-col items-center">
                  <button className='bg-gray-200 md:text-sm px-3 lg:px-4 py-1 my-1 font-semibold rounded-full text-black'>
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
    </div>
  )
}

export default ProductSkeleton