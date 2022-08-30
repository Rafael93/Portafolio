import './app.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/Skills/skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

/*FUENTE https://www.youtube.com/watch?v=2kg0z1qNrkw*/

function App(){
  return(
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App;