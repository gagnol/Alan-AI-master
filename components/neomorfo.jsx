import Image from 'next/image'
import React from 'react'
import AI2 from '../assets/ai2.png'
import AI1 from '../assets/ai3.png'
import logo1 from "../assets/logo1.png"

function neomorfo() {
  return (
    <div>
      
        <div className='boxg'>
        <div className="container-nav">
        <Image width={50} height={50} src={logo1} alt="" onClick={() => setOpen(true)} />
        

        <ul  className="nav navbar-nav justify-content-end">
                <li   className="menu-item nav-item ">
                   <span>LOGIN</span><span className='a-log'>►</span>
                </li>
         </ul>
      </div>
              <br/> <br/> 
        <div className="glassmorphism">

        <div className="weather-box">
             <h3 className="cw-cyan-plus">Make your AI System smarter<br/>with high quality,
                                multi-faceted
                            </h3>
           </div>
        <div className="drops">
          <div className="drop drop-1">
          
          </div>
          <div className="drop drop-2">
                    <div className="row">
                        <div className="col-lg-10">
                            <h1 className="bigger section-headline white">
                                <span className="cw-cp-cat-ico hexa-w mr-0">AI</span>
                                      Training Data</h1>
                                 <p><a  className="btn-primary btn-lg">Contact us</a></p>
                        </div>
                    </div>
          </div>
        
          <div className="drop drop-4">
            
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default neomorfo
  