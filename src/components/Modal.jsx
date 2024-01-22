import { cloneElement, createContext, useContext, useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import Button from './Button';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick();

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-full w-screen bg-white/[.1] backdrop-blur-sm transition-all duration-500">
      <div
        className="transfor fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 px-[3.2rem] py-[4rem] transition-all duration-500"
        ref={ref}
      >
        {cloneElement(children, { onCloseModal: close })}
        <Button onClick={close}>X</Button>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
