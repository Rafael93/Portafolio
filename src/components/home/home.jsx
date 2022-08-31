import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
	<div name="home" className='w-full h-screen bg-[#0a192f]'>
		{/* Container */}
    <div className='w-full mx-auto px-8 flex flex-col justify-center text-center h-full sm:items-center '>
      <p className='text-pink-600'>Hello, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rafael Gamarra</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a freelancer Developer</h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a student, an autodidact and a freelancer developer, currently I'm focusing in become a full-stack developer</p>
      <div>
        <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
        </button>
      </div>
    </div>
	</div>
  )
}

export default Home