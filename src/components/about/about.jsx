import React from 'react'

const About = () => {
	return (
  	<div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300 pr-10'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-10'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='text-right sm:text-right text-4xl font-bold'>
						<p className='text-center sm:items-center'>Hi. I'm Rafael nice to meet you. Please take a look around.</p>
					</div>
					<div className='sm:text-right text-2xl'>
						<p className='text-center sm:items-center'>I'm passionate about building apps that improves the lives of those who will use it.</p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default About