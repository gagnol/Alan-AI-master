import Image from 'next/image'
import React from 'react'
import sepa from "../assets/header-sepa.png"
import facial from "../assets/facial.webp"
import chat from "../assets/chat.webp"
import yellow from "../assets/header-sepa2.webp"


function creator() {
    return (
        <>
             <div className="drops">
          <div className="drop drop-4">  </div>
          <div className="drop drop-5">  </div>
          </div>
             <h3 className='text-5xl font-bold margin-15'>Case Studies</h3>
           
                     <div className="containerx">
                          <div className='boxes flex items-center justify-between mt-24'>
                    <div className="location-box">
                        <Image width={450} height={350}
                            src={chat}
                            loading="lazy" className="card-img-top lazy" alt="Support Chatbot Training" />
                        <div className='text-xl font-semibold mt-5 mb-2'>Support Chatbot Training</div>
                        <p className='opacity-60'>(Authentic) user questions in a text-format can teach chatbots how to respond effectively to different human interactions.<br/>
                        Inside Mobile app and real time response. </p>
                        <ul className="list-unstyled btn-list-group m-0">
                            <li> <a className="a-face">Read more ►</a> </li>
                        </ul>
                    </div>
                    <div className="location-box">
                        <Image width={450} height={350}
                            src="https://cdn.clickworker.com/wp-content/uploads/2022/07/car-information-system-training.webp"
                            loading="lazy" className="card-img-top lazy" alt="Support Chatbot Training" />
                        <div className='text-xl font-semibold mt-5 mb-2'>Car Information Training</div>
                        <p className='opacity-60'>Using recorded (authentic) user voice commands can optimize car
                            information systems to correctly understand spoken instructions from different types
                            of voices and languages.</p>
                        <ul className="list-unstyled btn-list-group m-0">
                            <li> <a className="a-face">Read more ►</a> </li>
                        </ul>
                    </div>
                    <div className="location-box">
                        <Image width={450} height={350} loading="lazy"
                            alt="Car Information System Training"
                            src={facial}
                            className="card-img-top lazy lazyload"
                        />
                        <div className='text-xl font-semibold mt-5 mb-2'>Facial Recognition Training</div>
                        <p className='opacity-60'>Photographs of faces with different expressions from various
                            perspectives can teach three-dimensional, automated facial recognition systems to
                            recognize faces and moods correctly.</p>
                        <ul className="list-unstyled btn-list-group m-0">
                            <li> <a className="a-face">Read more ►</a> </li>
                        </ul>
                    </div>
                   
               </div>
            </div>
            <Image src={yellow} width={1900} height={600} alt=""/>
            

        </>

    )
}


export default creator

