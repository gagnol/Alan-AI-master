import Image from 'next/image'
import React from 'react'
import map from '../assets/world.svg'
import sepa from "../assets/header-sepa.png"
function main() {
  return (
<>
<div>
<div className="app__bg app__wrapper section__padding" id="contact">
    <Image src={map} alt="finus_img" height={600} width={600} />
    <div className="app__wrapper_info pongo">
      
      <h3 className='grey'>OUR CROW</h3>
            <div className="a-content">
      
        <h6 >   Workers are a team of internet professionals registered with our organization.<br/>
                They work online, performing micro-tasks on our platform using their own desktop,
                tablet or smartphone (via worker-App).<br/>
                Workers participate in projects on a freelance basis and according to their own schedule.<br/>
                They are compensated directly through us on a per assignment basis.
        </h6>
        </div>
        <a className="btn-primary btn-lg" >Read More</a>
            </div>
              </div>
      </div>
       </>
  )
}

export default main
