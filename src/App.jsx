 import React, { useEffect } from 'react'
 import Aos from 'aos'
 import 'aos/dist/aos.css'
 import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
 import Navbar from './Navbar'
import Home from './Home'
import AOS from 'aos';
import "aos/dist/aos.css"
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import About from './About'
import MainMenu from './MainMenu'
import Contact from './Contact'
 
 
 
 const App = () => {

   useEffect(() => {
  AOS.init({
    duration: 5000,  
    once: true,      
  });
}, []);
   return (
      <>
      <Router>
        <Navbar/>
         
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/mainmenu' element={<MainMenu/>} />
          <Route path='/contact' element={<Contact/>} />





           

        </Routes>
        <Footer/>
        <ScrollTop/>
      </Router>

    
      
      
      </>
   )
 }
 
 export default App
 