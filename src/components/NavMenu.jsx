import { menuItem } from "../../data";

const NavMenu = () => {
  return (
    <menu className="">
      <ul className="flex items-center uppercase gap-7">
        {menuItem.map((menu, index) => (
          <li key={index} className="hover:text-[#FF3131]">
            <a href={`#` + menu.item}>{menu.item}</a>
            {console.log(menu.item)}
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default NavMenu;
