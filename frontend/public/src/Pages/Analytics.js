import React from 'react';
import Laptop from '../Images/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-3xl'>PRICE PREDICTION DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Predict Laptop Prices Accurately</h1>
          <p style={{ color: 'black', marginTop:'-50px' }}>
          An AI-powered personalized laptop selection and cost prediction system can help address these challenges. By using machine learning algorithms to analyze data on the user's preferences and requirements, the system can recommend the best laptop for the user while predicting its future price trends. This capability provides customers with valuable insights on when to buy a laptop and when to upgrade to a new model, helping them make informed decisions and get the best value for their money.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
