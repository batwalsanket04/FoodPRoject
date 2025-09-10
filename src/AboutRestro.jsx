import React, { useState } from 'react'
import Img from "./assets/10021.png";

const AboutRestro = () => {
    const [hover,setHover]=useState("");
  return (
    <div>
        <div className="container-fluid "   data-aos="fade-up"  style={{
            paddingTop:'100px',
            paddingBottom:'100px'
        }}>
            <div className="row">
                <div className="col-md-6 text-center align-content-center justify-content-center">
                 <img src={Img} alt=""  className='img-fluid w-100'/>
                </div>
                <div className="col-md-6  mt-5 ">
                    <h2 style={{
                        fontFamily:'poppins',
                        fontSize:'24px',
                        color:'#ff5a00',
                        lineWeight:'24px',
                        fontWeight:'500',
                        textAlign:'justify',
                        padding:'30px',
                    }}>About Our Restourant</h2>

                    <h1  className='w-100' style={{
                        fontSize:'49px',
                        fontFamily:'Josefin Sans',
                        fontWeight:'600',
                        lineHeight:'63.3px',
                        color:'rgb(33,32,37)',
                        padding:'20px'
                    }}>We Provide Good Food For Your Family!</h1>

                    <p className='w-100' style={{
                        width:'90%',
                        fontFamily:'poppins',
                        padding:'20px',
                        fontSize:'20px',
                        lineHeight:'40px',
                        fontWeight:'300',
                        

                    }}>Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer</p>
                    <p style={{
                    width:'100%',
                        fontFamily:'poppins',
                        padding:'20px',
                        fontSize:'20px',
                        lineHeight:'40px',
                        fontWeight:'300',
                    }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.</p>

                    
                     <button
            style={{
              width: "clamp(120px, 20vw, 200px)",
              height: "60px",
           
              background: hover ? "#ff5a00" : "transparent",
              border: "2px solid #ff5a00",
              borderRadius: "8px",
              color: hover? "black" : "#ff5a00",
              fontWeight: 600,
              transition: "all 0.5s ease",
            
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
             Learn More
          </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutRestro
