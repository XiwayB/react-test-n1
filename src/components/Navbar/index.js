import React from "react";

import { menuData } from "../../data/MenuData";
import {
  Nav,
  NavLogoLink,
  Bars,
  NavMenu,
  NavMenuLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavLogoLink to="/">loopstudios</NavLogoLink>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
