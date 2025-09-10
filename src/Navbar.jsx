import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../src/assets/10014.png'
import AOS from 'aos';
import "aos/dist/aos.css"

const Navbar = (props) => {
   const [hover, setHover] = useState(false);
  useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true,      
  });
}, []);
  
   

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-transparant" style={{fontFamily:'Josefin Sans',fontSize:'20px',fontWeight:'300',position:'sticky'}}>
  <div className="container-fluid">
     <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-1 align-content-center">
        <div className="logo ms-5">
          <NavLink><img src={Image} alt=""  style={{height:'70px',width:'110px'}} /></NavLink>
        </div>
      </div>
     </div>
    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{transition:'all 0.3s ease-in-out'}} >
      <span className='fw-bold'>Menu</span><span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-3  mt-1  " id="navbarSupportedContent" >
     <ul className="navbar-nav mx-auto mb-2   mb-lg-0 d-flex justify-content-center gap-5">
  <li className="nav-item align-content-center ">
    <NavLink className="nav-link active me-5 ms-3" aria-current="page" to="/">Home</NavLink>
  </li>
  <li className="nav-item  align-content-center">
    <NavLink className="nav-link me-5 ms-3" to="/about">About</NavLink>
  </li>
  <li className="nav-item align-content-center">
    <NavLink className="nav-link me-5 ms-3" to="/mainmenu">Manu</NavLink>
  </li>
    
  <li className="nav-item align-content-center">
    <NavLink className="nav-link me-5 ms-3" to="/contact">Contact</NavLink>
  </li>
  <form>
    <button className="btn btn-outline ms-2  ms-3"  type="submit"  style={{ borderColor: "#ff7f00",height:'60px',width:'200px',fontSize:'20px',
    position: "relative",
        width: "200px",
        height: "50px",
        background: hover ? "#ff5a00" : "transparent",
        display: "inline-flex",
        border: "2px solid #ff5a00",
        textDecoration: "none",
        borderRadius: "8px",
        fontSize: "19px",
        color: hover ? "black" : "#ff5a00",
        fontWeight: 600,
        letterSpacing: "2px",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.5s ease",
        cursor: "pointer",
        overflow: "hidden",

    }} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >Order Online</button>
  </form>
</ul>

      
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar
