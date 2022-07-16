import {FC} from 'react';

const Sidebar:FC = () => {

  


  return (
    <div style={{height: "88vh"}} className='hidden md:flex flex-col justify-center items-center bg-black py-2 gap-3 lg:gap-4 px-1.5'>
      <i className="fas fa-user-circle object-cover text-white text-5xl lg:text-6xl"></i>
      <button className='text-base lg:text-lg rounded-full py-0.5 px-3.5  bg-white font-semibold'>About</button>
      <div className='text-center'>
        <p className="text-base lg:text-lg font-semibold text-white">User</p>
        <hr style={{border: "1px solid white"}} className="w-20 lg:w-28"/>
      </div>
      <p className="text-xs lg:text-sm font-bold text-white">Ruwaid</p>
      <div className='text-center'>
        <p className="text-base lg:text-lg font-semibold text-white">Total orders</p>
        <hr style={{border: "1px solid white"}} className="w-24 lg:w-28"/>
      </div>
      <p className='text-white text-sm lg:text-base font-bold'>32</p>
      <div className='text-xs lg:text-sm text-start font-semibold text-white'>
        <p>Electronics: 18</p>
        <p>Furnitures: 12</p>
        <p>Groceries: 1</p>
        <p>Others: 1</p>
      </div>
      <div className='text-center'>
        <p className="text-base lg:text-lg font-semibold text-white">VAT Paid</p>
        <hr style={{border: "1px solid white"}} className="w-20 lg:w-28"/>
      </div>
      <p className='text-white text-sm lg:text-base font-bold'>$420.69</p>
      <button className='bg-white py-1 rounded-full px-3 font-semibold'>Log out</button>
    </div>
  );
};

export default Sidebar;
/* Finally made the sidebar woo hoo*/