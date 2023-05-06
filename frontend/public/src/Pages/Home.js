import React from 'react';
import Typed from 'react-typed';
import Newsletter from './Newsletter';
import Analytics from './Analytics';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='text-white'>
         <Navbar/>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH MACHINE LEARNING
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-xl  md:py-6'>
          Laptop Price Prediction.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-3xl text-xl py-4'>
            We Predict Laptop Prices
          </p>
          <Typed
          className='md:text-3xl sm:text-3xl text-xl  md:pl-4 pl-2'
            strings={['Fastly', 'Accurately']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-lg text-xl font-bold text-gray-500'>A Machine Learning Application by LAPTOPSTORE</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      <Analytics/>
        <Newsletter/>
    </div>
  );
};

export default Home;
