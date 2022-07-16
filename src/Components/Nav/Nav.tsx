import { FC } from 'react';
import { Link } from 'react-router-dom'
interface NavProps {
  selection: () => void;
  selectionM: () => void;
}
const Nav:FC<NavProps> = ({selection, selectionM}) => {





  return (
    <nav style={{height: "12vh"}} className='sticky top-0 navbar bg-white flex justify-between items-center text-xs lg:text-sm text-white'>
        <button className='button font-semibold bg-black rounded-full h-6 lg:h-8 w-24 lg:w-32 flex justify-center items-center ml-9'>
            eWebShop
        </button>
        <button className='button font-semibold bg-black rounded-full h-6 lg:h-8 w-24 lg:w-32 flex justify-center items-center mr-9'
        onClick={selection}  
        >
            Log in
        </button>
        <Link to='/cart' className='hidden md:flex button font-semibold bg-black rounded-full h-6 lg:h-8 w-24 lg:w-32 justify-center items-center mr-9'>
          <div className='relative -top-3 -left-8 px-3 py-1 rounded-full bg-red-600'>1</div>
           Cart
        </Link>
        <button className='md:hidden button font-semibold bg-black rounded-full h-6 lg:h-8 w-24 lg:w-32 flex justify-center items-center gap-1 mr-9'
        onClick={selectionM}>
          <p>Menu</p>
          <i className='fa fa-bars text-white'></i>
        </button>
    </nav>
  );
};

export default Nav;
