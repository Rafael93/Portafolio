import React from 'react'

const About = () => {
	return (
  	<div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300 pr-5'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[100px] w-full grid grid-cols-2 gap-10'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
					</div>
					<div>
					</div>
					<div>
						<p>Hi. I'm Rafael nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>I'm passionate about building apps that improves the lives of those who will use it.</p>
					</div>
				</div>
			</div>
    </div>
  )
}

export default About