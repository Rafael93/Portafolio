import './home.css';
import {BsMouse} from 'react-icons/bs';
import img from '../props/rl-logo.png';

function Home(){
	return(
		<div id="home" className="container home-container">
			<div className="logo">
				<div className="main-img">
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
				</div>
				<img src={img} alt='' />
			</div>
			<a href='#footer' className='scroll-down'>
				<hr />
				<h5>scroll down</h5>
				<BsMouse className='scroll'/>
				<hr /> 
			</a>

			<h2>
				<span>About Me</span> <br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto unde repudiandae magni natus, sint cumque enim qui numquam sit officia exercitationem, ipsam corrupti eos quod dolore et, totam non?
				</p>
			</h2>
		</div>
	)
}

const toggler = document.querySelectorAll('.main-img');
console.log(toggler);
/*toggler.addEventListener('click',() => {
	toggler.classList.toggle('active');
});*/

export default Home;