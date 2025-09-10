import React from 'react'
import Img from './assets/10019.png';


const AboutRestro2 = () => {
  return (
    <div>
      <div
  className="container-fluid d-flex align-items-center" data-aos="fade-right"
  style={{
     
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px", // adjust height as you like
    
  }}
>
  <div className="row w-100 h-100">
    <div className="col-md-6 ms-auto  p-5">
      <h2 style={{
        fontSize:'20px',
        fontFamily:'poppins',
        color:'#ff5a00',padding:'20px'
      }}>About Our Restaurant</h2>
      <h1 style={{
         fontSize: "clamp(24px, 8vw, 50px)",
              fontFamily: "Josefin Sans",
              color: "#212025",
              lineHeight: "1.3",
              textAlign: "justify",
              marginInline: "auto",
              fontWeight:"600",padding:'20px'
      }}>We Provide Good Food For Your Family</h1>

      <p style={{
        fontSize:'16px',
        lineHeight:'30px',
        fontFamily:'poppins',
        fontWeight:'500',padding:'20px'
      }
      }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia repellendus, debitis culpa omnis laborum temporibus maxime beatae repellat magnam!</p>
    
      <form className="d-flex" role="search">
      <input className="form-control me-2 p-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className='border-0 ' type="submit" style={{
         height: "50px",
                  background: "#ff5a00",
                  color: "white",
                  fontWeight: 600,
                  borderRadius: "8px",
                  width:'200px',
                  height:'55px'
                  


                
      }}>Search</button>
    </form>

    </div>
  </div>
</div>

    </div>
  )
}

export default AboutRestro2
