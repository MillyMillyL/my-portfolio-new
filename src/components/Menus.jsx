import { cloneElement, createContext, useContext, useState } from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import useOutsideClick from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { close, open, openId, setPosition } = useContext(MenusContext);

  function handleToggle(e) {
    e.stopPropagation();
    if (openId === '' || openId !== id) {
      open(id);
    } else close();

    const rect = e.target.closest('button').getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height,
    });
  }

  return (
    <button
      className="translate-x-3 rounded-md border-none p-[0.2rem] transition-all duration-200 hover:bg-gray-100"
      onClick={handleToggle}
    >
      <HiEllipsisVertical className="h-[2rem] w-[2rem] text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);

  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className={`fixed rounded-md bg-gray-50 shadow-md`}
      style={{ top: position.y, right: position.x }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="flex w-full items-center gap-[1.6rem] border-none bg-none px-[0.6rem] py-[0.3rem] text-left transition-all duration-200 hover:bg-gray-50"
        onClick={handleClick}
      >
        {cloneElement(icon, {
          className:
            'w-[1.6rem] h-[1.6rem] text-gray-400 transition-all duration-300',
        })}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.Menu = Menu;
Menus.List = List;
Menus.Button = Button;

export default Menus;
