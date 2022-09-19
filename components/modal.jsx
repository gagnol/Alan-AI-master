import { Box, Modal, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/sony2.gif"

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
   maxWidth:"700",
  maxHeight:"400",
  border:"0px transparent"
});

export default function Modalx() {
  const [open, setOpen] = useState(false);
  return (
    <div>


      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
         
 

      
        <Image width={150} height={125} src={logo2} alt="" onClick={() => setOpen(true)} />
        
      

{/* 
          <video autoplay="true" muted="true" loop="true" className='video' width={600} height={500}>
                <source src="https://res.cloudinary.com/dps8xubee/video/upload/v1663426366/videos/c3e8l1commc6arqyajec.mp4" type="video/mp4" />
               </video>
 */}

 
        
      

      </SytledModal>

    </div>
  );
}
