import Image from 'next/image'
import React from 'react'
import yellow2 from '../assets/header-sepa3.webp'

function middle() {
  return (
    <>
       <div className="drops">
          <div className="drop drop-4">  </div>
          <div className="drop drop-5">  </div>
          </div>
      <div className="container hexa-fx-l hexa-fx-r">
         <div className="row"><div className="col-lg-6">
            <h2 className="section-headline grey-headline node-left mt-0 mb-4">How Data is created</h2>
            </div>
            </div>
            <div className="row"><div className="col-lg-6">
     <p className="a-p">We use our Worker-App (for Android and iOS) to enable Workers to easily create datasets 
     and transfer them to you from anywhere in the world.</p>
         </div>
         </div>
         <div className="row">
            <div className="col-lg-12 flex__center"> 
            
            
            <Image width={700} height={350} alt="Clickworker App" loading="lazy" 
            src="https://cdn.clickworker.com/wp-content/uploads/2022/07/clickworker-app-img-webp.webp"
            className="mt-5 d-none d-md-block lazyloaded ls-is-cached" />
            
              
                </div>
                </div>
                </div>
             

    </>

  
  )
 }
export default middle
