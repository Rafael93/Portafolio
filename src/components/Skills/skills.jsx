import React from 'react'
import HTML from '../../assets/html.png' 
import CSS from '../../assets/css.png'
import Javascript from '../../assets/javascript.png'
import ReactLogo from '../../assets/react.png'
import Mongo from '../../assets/mongo.png'
import Node from '../../assets/node.png'
import Github from '../../assets/github.png'
import Tailwind from '../../assets/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
			{/* CONTAINER */}
			<div className='max-w-[1000px] p-4 flex flex-col mx-[100px] w-full h-full md:mx-auto content-center'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
					<p className='py-4'>// these are the tecnologies I've worked with</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap 4 text-center py-8'>
					<div className='my-4 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={HTML} alt="html icon" />
						<p>HTML</p>
					</div>
					<div className='my-4 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={CSS} alt="html icon" />
						<p className='my-5'>CSS</p>
					</div>
					<div className='my-4 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={Javascript} alt="html icon" />
						<p className='my-5'>Javascript</p>
					</div>
					<div className='my-4 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={ReactLogo} alt="html icon" />
						<p className='my-5'>React</p>
					</div>
					<div className='mt-8 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={Mongo} alt="html icon" />
						<p className='my-5'>Mongo DB</p>
					</div>
					<div className='mt-8 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={Node} alt="html icon" />
						<p className='my-5'>Node Js.</p>
					</div>
					<div className='mt-8 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={Github} alt="html icon" />
						<p className='my-5'>Github</p>
					</div>
					<div className='mt-8 mx-4 shadow-md shadow-[#040c16] hover:scale-110 duration-100'>
						<img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
						<p className='my-5'>Tailwind CSS</p>
					</div>
				</div>
			</div>
		</div>

  )
}

export default Skills