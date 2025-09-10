import React from 'react'
import Img from './assets/10018.png';
import Img2 from './assets/10017.png';
import Img3 from './assets/10016.png';
import { useState } from 'react';


const Blog = () => {
    const [hover,setHover]=useState(null)
  return (
    <div>
      <div className="container-fluid " data-aos="fade-right" style={{paddingTop:'100px', paddingBottom:'100px'}}>
        <div className="row">

            <h2 style={{
                 color: "#ff5a00", 
                 fontSize: "1.5rem",
                 fontFamily:'poppins',
                 textAlign:'center',

            }}>Our New Blog News</h2>
            <h1 style={{
              fontSize: "clamp(40px, 6vw, 70px)",
              fontFamily: "Josefin Sans",
              color: "#212025",
              lineHeight: "1.3",
              textAlign: "justify",
              marginInline: "auto",
              fontWeight:"600",
              textAlign:'center'
            }}>Our Recent News</h1>
            <div className="col-md-12 mt-4">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card mt-3">
                            <div className="card-body p-0">
                                <img src={Img}alt="" className='img-fluid h-100 w-100' />
                            </div>
                             <div className="col-md-4 position-absolute  " 
                                onMouseEnter={() => setHover(1)}
                                onMouseLeave={() => setHover(null)}
                                style={{
                                  width: "clamp(400px, 40vw, 400px)",
                                  height: "160px",
                                  top:'80%',
                                  background: hover === 1 ? "#ff5a00" : "rgba(255,255,255,0.9)",
                                 // border: "2px solid #f5f5f5",
                                  borderRadius: "8px",
                                  color: hover === 1 ? "" : "#ff5a00",
                                  fontWeight: 600,
                                  transition: "all 0.5s ease",
                                  fontSize:'22px',fontFamily:'Josefin sans'
                                }}>
                                    <h3 style={{
                                        color:'black',
                                        fontWeight:'400',
                                        textAlign:'center',
                                        padding:'10px'
                
                                    }}>9 SEP 2025</h3>
                                <p style={{textAlign:'center', paddingTop:'0px'}}> Addiction When Food Plate Becomes</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-3">
                            <div className="card-body p-0">
                                <img src={Img2}alt="" className='img-fluid h-100 w-100'  />
                            </div>
                            <div className="col-md-4 position-absolute " 
                                onMouseEnter={() => setHover(0)}
                                onMouseLeave={() => setHover(null)}
                                style={{
                                  width: "clamp(400px, 40vw, 400px)",
                                  height: "160px",
                                  top:'80%',
                                  background: hover === 0 ? "#ff5a00" : "rgba(255,255,255,0.9)",
                                  //border: "2px solid #f5f5f5",
                                  borderRadius: "8px",
                                  color: hover === 0 ? "" : "#ff5a00",
                                  fontWeight: 600,
                                  transition: "all 0.5s ease",
                                  fontFamily:'Josefin Sans',
                                  fontSize:'22px',
                                }}>
                                     <h3 style={{
                                        color:'black',
                                        fontWeight:'400',
                                        textAlign:'center',
                                        padding:'10px'
                
                                    }}>10 SEP 2025</h3>
                                <p style={{textAlign:'center', paddingTop:'0px'}}>Addiction When Food Plate Becomes</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-3">
                            <div className="card-body p-0">
                                <img src={Img3}alt="" className='img-fluid h-100 w-100' />
                            </div>
                           <div className="col-md-4 position-absolute " 
                                onMouseEnter={() => setHover(3)}
                                onMouseLeave={() => setHover(null)}
                                style={{
                                  width: "clamp(400px, 40vw, 400px)",
                                  height: "160px",
                                  top:'80%',
                                  background: hover ===3 ? "#ff5a00" : "rgba(255,255,255,0.9)",
                                   fontFamily:'Josefin Sans',
                                  borderRadius: "8px",
                                  color: hover === 3 ? "" : "#ff5a00",
                                  fontWeight: 600,
                                  fontSize:"22px",
                                  
                                  transition: "all 0.5s ease",
                                }}>
                                     <h3 style={{
                                        color:'black',
                                        fontWeight:'400',
                                        textAlign:'center',
                                        padding:'10px',
                                       
                
                                    }}>11 SEP 2025</h3>
                                <p style={{textAlign:'center', paddingTop:'0px'}}>Addiction When Food Plate Becomes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
