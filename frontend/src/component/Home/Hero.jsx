import React from 'react'
import  img from "./her-removebg-preview.png"

export default function Hero() {
  return (
    <div className='h-[75vh] flex'>
    <div className='w-full lg:w-3/6 flex flex-col  items-center lg:items-start justify-center'>
    <h1 className='text-6xl font-semibold text-yellow-100'>Discover Your Great Read</h1>
    <p className='mt-4 text-xl text-zinc-300'>Uncover cativating stories , enriching knowledge and endless inpspiration in our curated collection of books    
    </p>
    <div className='mt-8'>
    <button className='text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover Books</button>
    </div>
   
    </div>
    <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center border-remo'>
    <img src={img} className='w-100' alt='...'/>
    </div>
    </div>
  );
}
