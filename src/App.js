import './App.css';
import Footer from './Footer';
import Description from './Description';
import Navbar from './Navbar';
import PortraitSlide from './PortraitSlide';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <PortraitSlide/>
      <Description/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
