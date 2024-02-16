

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Success from "../../asserts/success.png";
import { useRef, useState } from "react";
import Voskl from "../../asserts/voskl.png";
import { Link, useNavigate } from 'react-router-dom';
import { OverlayStyles, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage } from './modalStyles';
import Galka from "../../assets/galka.png"
export interface Props {
    open: boolean,
    children: string,
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
    
   
    </>,
    portalElement || document.body
  );
}