import './App.css';
import Navbar from './Components/Navbar';
import TechStacks from './Components/TechStacks';
import Hero from './Hero'
import Projects from './Components/Projects'
import About from './Components/About';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero  />
      <About/>
      <TechStacks/>
      <Projects/> 
      <ContactMe/>
    </div>
  );
}

export default App;
