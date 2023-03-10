import React, { useState, useCallback } from "react"
import PortalModal from "../../modal/PortalModal";



export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const open = useCallback((e:React.MouseEvent): void => {
    setIsOpen(true);
  }, []);

  const close = useCallback((e : React.MouseEvent): void => {
    if(e.target===e.currentTarget){
    setIsOpen(false)
  } 
  }, []);

  return {
    PortalModal: isOpen ? ({ children }) => (
      <PortalModal onClose={close}>{children}</PortalModal>
    ) : () => null,
    open,
    close,
    isOpen,
  };
}