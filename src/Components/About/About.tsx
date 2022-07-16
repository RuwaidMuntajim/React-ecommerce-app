import { FC } from 'react';
import Footer from './Footer';

const About:FC = () => {
  return (
    <div style={{height: "88vh"}} className='About bg-black flex flex-col justify-start items-center'>
        <div className='text-white text-4xl flex flex-col justify-center items-center p-4'>
            <p>About</p>
            <hr className='my-1 w-36' style={{border: "1px solid white"}}/>
        </div>
        <i className="fas fa-user-circle object-cover text-white text-6xl"></i>
        <div className='flex flex-col justify center items-start px-auto my-4'>
            <p className='font-semibold text-white text-base'>Name: Ruwaid Muntajim</p>
            <p className='font-semibold text-white text-base'>Email: ruwaid19500@gmail.com</p>
            <p className='font-semibold text-white text-base'>Total Order: 32</p>
            <p className='font-semibold text-white text-base'>Electronics: 16</p>
            <p className='font-semibold text-white text-base'>Furnitures: 14</p>
            <p className='font-semibold text-white text-base'>Groceris: 1</p>
            <p className='font-semibold text-white text-base'>Others: 1</p>
            <p className='font-semibold text-white text-base'>Tax Paid: $420.69</p>
        </div>
        <hr className='w-screen' style={{border: "1px solid white"}}/>
        <Footer/>
    </div>
  );
};

export default About;
