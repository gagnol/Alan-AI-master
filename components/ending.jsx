import Image from 'next/image'
import React from 'react'
import google from "../assets/playstore.png"
function ending() {
  return (
    <>
      <div className="login-register-card">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="section-headline white node-right mt-5 mb-5">Explore Worker</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="button-collection">
               <Image width={300} height={150} alt="" src={google}/>
                  <button
                    className="btn white" >
                    Download Workers Playground to test your Projects on your mobile device</button>
                  
                  
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ending
