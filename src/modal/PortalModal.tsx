import styled from "styled-components"
import { createPortal } from "react-dom"
import React from "react"

const ModalWrapStyle = styled.div`
  width: 100%; 
  height: 100vh; 
  overflow: hidden; 
  position: absolute; 
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justifyContent: center;
  alignItems: center;
  textAlign: center;
  `


const ModalStyle = styled.div`
  padding:1rem;
  border-radius : 0.375rem;
  position:absolute;
  top:50%;
  left:50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  display:flex;
  flex-direction: column;
  overflow : auto;
  `

type Tprops = {
  onClose : any
  children:  any
}

const PortalModal = ({onClose, children}:Tprops)=> {
  const modalRoot = document.querySelector('#modal')
  return createPortal(
    <>
      <ModalWrapStyle
        onClick={(e)=> onClose(e)}
      >
        <ModalStyle > 
            {children}
        </ModalStyle>
      </ModalWrapStyle>
    </>,modalRoot)
}

export default PortalModal;