import './App.css';
import Navbar from './Components/Navbar';
import TechStacks from './Components/TechStacks';
import Hero from './Hero';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <TechStacks/>
      <Projects/> 
    </div>
  );
}

export default App;
