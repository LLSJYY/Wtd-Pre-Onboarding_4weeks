import React, { useState, useCallback } from "react"
import PortalModal from "../../modal/PortalModal";



export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(null);
  const open = useCallback((e:React.MouseEvent): void => {
    if ((e.target === e.currentTarget)) {
      setIsOpen(true);
    }
  }, []);

  const close = useCallback((e : MouseEvent): void => {
    if ((e.target === e.currentTarget)) {
      setIsOpen(false);
    }
  }, []);

  return {
    PortalModal: isOpen ? ({ children }) => (
      <PortalModal onClose={(e)=>close(e)}>{children}</PortalModal>
    ) : () => null,
    open,
    close,
    isOpen,
  };
}