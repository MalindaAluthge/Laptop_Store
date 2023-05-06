import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl '>
            What is this project?
          </h1>
          <p>Our project is designed to predict the price of a laptop based on their different features such as
            size, GPU, CPU, memory, space, Operating system, and company.This product will ultimately make buying
            a laptop a quick and easy process that will fit the needs of the customer.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Try Predict
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Newsletter;
