import { Zoom } from 'react-preloaders';
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
      <Zoom background="#f4f4f4" color={'#262728'}/>
      <ScrollToTop smooth className='bg-[#f4f4f4] rounded-3xl z-50 flex items-center justify-center'/>

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
