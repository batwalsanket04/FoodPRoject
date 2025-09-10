import React, { useState } from 'react'
import Dish from "./assets/dish1.png";
import weter2 from './assets/weter2.png';
import chief from './assets/cap.png';
import './Services.css';

const Services = () => {
    const [hover, setHover]=useState('')
  return (
    <div>
        <div className="container-fluid "   data-aos="fade-left" style={{paddingTop:"100px",paddingBottom:'100px'}}>
            <div className="row">
                <h2 style={{
                    fontFamily:'poppins',
                    color:'#ff5a00',
                    fontSize:'23px',
                    textAlign:'center'
                }}>Services We Offer</h2>
                <h1 style={{
                    fontFamily:'Josefin Sans',
                    fontWeight:'600px',
                    textAlign:'center',
                    fontSize:'49px',
                    padding:'20px'

                }}>Our Best Services</h1>

            <div className="col-md-12 text-center justify-content-between my-2" data-aos="fade-left">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card shadow border-0 service-card">
                            <div className="card-body">
                                <img src={weter2} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 " data-aos="fade-left">
                        <div className="card  shadow border-0 service-card">
                            <div className="card-body">
                                <img src={Dish} alt=""  style={{height:'250px',width:'250px'}}/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-left">
                        <div className="card shadow border-0 service-card">
                            <div className="card-body ">
                                <img src={chief} alt=""   style={{height:'250px',width:'250px'}} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>                           
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

export default Services
