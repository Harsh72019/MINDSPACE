import React, { useState } from 'react';
import { data } from '../../data/data.js';
import Hero from './Hero.js';
import HeadlineCards from './Headline.js';
import {motion} from "framer-motion"


const Resource = () => {
  //   console.log(data);
  const [foods, setResource] = useState(data);

  //   Filter Type meditaion/exercise etc
  const filterType = (type) => {
    setResource(
      data.filter((item) => {
        return item.type === type;
      })
    );
  };

// Filter Type Illness
const filterCategory = (category) => {
  setResource(
    data.filter((item) => {
      return item.category === category;
    })
  );
};



  // Youtube Thumbnail
  
  return (
    <>
    <div className='bg-[#6a5ca5]'>

    <Hero/>
    <HeadlineCards/>
    </div>
    
    

    <div className='w-100vw  h-[150vh] bg-white fontt m-auto px-4 py-12'>
      <h1 className='text-black font-bold text-5xl text-center'>
        Top Resources
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setResource(data)}
              className='m-1  bdr  border text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('meditation')}
              className='m-1 bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Meditation
            </button>
            <button
              onClick={() => filterType('exercise')}
              className='m-1 bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Exercise
            </button>
            <button
              onClick={() => filterType('wellness')}
              className='m-1 bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Wellness
            </button>
            
          </div>
        </div>


      </div>
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Illness */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setResource(data)}
              className=' bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterCategory('anxiety')}
              className=' bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Anxiety
            </button>
            <button
              onClick={() => filterCategory('stress')}
              className=' bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Stress
            </button>
            <button
              onClick={() => filterCategory('depression')}
              className=' bdr text-black text-lg hover:bg-gray-700 hover:text-white'
            >
              Depression
            </button>
            
          </div>
        </div>


      </div>

      {/* Display objects */}
      
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {foods.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target='_blank' // optional: opens the link in a new tab
      rel='noopener noreferrer' // recommended for security
      className='relative border shadow-lg rounded-lg hover:scale-105 duration-300'
    >
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-[200px] object-cover rounded-t-lg'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 text-white  text-lg rounded-t-lg opacity-0 hover:opacity-100 transition-opacity hover:text-2xl '>
        <div className='p-4'>
          <h3 className='text-lg font-bold mb-2'>Description</h3>
          <p className='text-lg'>{item.description}</p>
        </div>
      </div>
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{item.name}</p>
      </div>
      </motion.div>
    </a>
    
  ))}
  
</div>


    </div>
    </>
  );
};

export default Resource;
