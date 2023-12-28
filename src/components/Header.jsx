import NavMenu from "./NavMenu";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { menuItem } from "../../data";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="flex sticky top-0 z-50 items-center justify-between w-full px-8 sm:px-16 md:px-28 lg:px-48 xl:px-60 bg-[#FCFCFD]">
      <div>
        <img src="/playersmotion-logo.png" alt="logo" className="h-20 w-36" />
      </div>
      <div className="hidden lg:flex">
        <NavMenu />
      </div>

      <HiMenuAlt3
        className={
          !toggleMenu
            ? "text-[27px] cursor-pointer z-20 lg:hidden"
            : "text-white text-[27px] cursor-pointer z-20 lg:hidden"
        }
        onClick={handleToggleMenu}
      />

      <div
        className={
          toggleMenu
            ? "fixed left-0 top-0 w-full h-screen bg-black/90 backdrop-blur-sm px-4 py-7 flex flex-col z-10 ease-in duration-300 overflow-hidden"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10 overflow-hidden"
        }
      >
        <ul className="flex flex-col items-center justify-center h-screen text-white uppercase gap-7">
          {menuItem.map((menu, index) => (
            <li key={index} className="hover:text-[#FF3131] text-2xl">
              <a href={`#` + menu.item}>{menu.item}</a>
              {console.log(menu.item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
