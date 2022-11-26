import React, { useState } from "react";
import { ReactComponent as Menu } from "../images/menu.svg";

const NavBar = () => {

  const [menuMobile, setMenuMobile] = useState(false);
  
  const toggle = () => {
    setMenuMobile(menuMobile => !menuMobile);
  }

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de nosotros</a>
            </li>
            <li>
              <a href="#">Historia</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-mobile">
        <div className="menu-mobile-main">
          <Menu onClick={toggle}/>
        </div>
        {menuMobile && <div className="menu-mobile-container">
          <a href="#">Inicio</a>
          <a href="#">Acerca de nosotros</a>
          <a href="#">Historia</a>
          <a href="#">Contacto</a>
        </div>}
      </div>
    </>
  );
};

export default NavBar;
