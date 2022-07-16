import { FC } from 'react';

const Title:FC = () => {
  return ( 
    <div className='title flex flex-col justify-center items-center w-full my-2'>
        <p style={{fontFamily: "Poppins"}} className='font-bold text-lg md:text-2xl lg:text-3xl flex justify-center items-center pt-6 pb-2 text-center'>
            Reliability is what we care about
        </p>
        <hr className="w-5/6 lg:w-4/6 my-2" style={{border: "1px solid black"}}/>
    </div>
  )
};

export default Title;
