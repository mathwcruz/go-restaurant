import { ReactNode, useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  const [modalIsOpen, setModalIsIsOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen !== modalIsOpen) {
      setModalIsIsOpen(isOpen);
    };
  }, [modalIsOpen, isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          padding: "5px",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "700px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
