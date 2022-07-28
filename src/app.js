import './app.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';

/*FUENTE https://www.youtube.com/watch?v=2kg0z1qNrkw*/

function App(){
  return(
    <div>
      <Nav />
      <Home />
      <About />
    </div>
  )
}

export default App;