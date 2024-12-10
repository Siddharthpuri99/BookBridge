import React from 'react'
import Hero from '../component/Home/Hero'
import RecentlyAdded from '../component/Home/RecentlyAdded'

function Home() {
  return (
    <div className='bg-zinc-900 text-white px-10 py-8' >
      <Hero/>
      <RecentlyAdded/>
    </div>
  )
}

export default Home
