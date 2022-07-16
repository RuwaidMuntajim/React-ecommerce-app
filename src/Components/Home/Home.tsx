import { FC } from 'react';
import Carousel from '../Carousel/Carousel';
import Products from './Products/Products';
import Title from './Title';

const Home:FC = () => {
  return (
    <div className='Home'>
        <Carousel/>
        <div id='products' className='relative'>
        <Title/>
        <Products/>
        </div>
    </div>
  );
};

export default Home;
