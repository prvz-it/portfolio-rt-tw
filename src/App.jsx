import ScrollToTop from "react-scroll-to-top";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from './components/About';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="scroll">
        <ScrollToTop smooth />
      </div>

      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Resume/>
      <Services/>
      <Portfolio/>
      <Blogs/>
      <Contact/>
    </>
  )
}

export default App
