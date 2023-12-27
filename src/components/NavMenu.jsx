import { useState } from "react";
import { menuItem } from "../../data";

const NavMenu = () => {

    const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <ul className="flex items-center uppercase gap-7">
        {menuItem.map((menu, index) => (
          <li key={index} className="hover:text-[#FF3131]">
            <a href={`#`+menu.item}>{menu.item}</a>
            {console.log(menu.item)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
