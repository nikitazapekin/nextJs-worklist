/*import { Modal } from "./modalStyles";
const ModalComponent = () => {
    return ( 
        <Modal>

        </Modal>
     );
}
 
export default ModalComponent; */


import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Success from "../../asserts/success.png";
//import Galka from "../../asserts/galka.png";
import { useRef, useState } from "react";
//import "./modal.scss";
import Voskl from "../../asserts/voskl.png";
import { Link, useNavigate } from 'react-router-dom';
import { OverlayStyles, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage } from './modalStyles';
import Galka from "../../assets/galka.png"
export interface Props {
    open: boolean,
    children: string,
   // setIsOpen: 
   // children: string,
    onClose: () => void,
  
  }

    export default function ModalWindow({ children,  open, onClose}: Props) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  return ReactDom.createPortal(
    <>
<Modal>
    <ModalHeader>
<ModalHeaderImage src={Galka} />
    </ModalHeader>
 <ModalWrapper>
    <ModalTextBlock>
      {children}
    </ModalTextBlock>
    <ModalButton onClick={onClose}>
        Submit
    </ModalButton>
 </ModalWrapper>
</Modal>
<OverlayStyles />
    
     {/* {!error ? (
        <div className='modalWrapper'>
          <div className='alertSign' style={{ height: height / 2, width: width }}>
            <img src={Galka} alt="galka" className='galka' style={{ height: (height / 2) - 50 }} />
          </div>
          <p className='innerWindowText' style={{ position: "absolute", top: (height / 2) + 50 }}>
            {children}
          </p>
          <Link style={{ textDecoration: "none" }} to="/signin">
            <button className='continueModal' onClick={onClose}>Continue</button>
          </Link>
        </div>
      ) : (
        <div className='modalWrapper'>
          <div className='ErrorSign' style={{ height: height / 2, width: width }}>
            <img src={Voskl} alt="galka" className='galka' style={{ height: (height / 2) - 50 }} />
          </div>
          <p className='innerWindowText' style={{ position: "absolute", top: (height / 2) + 50 }}>
            {children}
          </p>
          <button className='continueModalError' onClick={onClose}>Continue</button>
        </div>
      )}
      <div className='overlayStyles'>
      </div> */}
    </>,
    portalElement || document.body
  );
}