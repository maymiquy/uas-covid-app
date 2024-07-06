import React, { useState } from "react";
import navLinkList from "../../../utils/constants/navlink-list";
import {
 NavbarContainer,
 NavbarInner,
 NavbarContent,
 NavbarBrand,
 NavbarNav,
 NavbarLink,
 NavbarToggle,
 NavbarDropdown,
 NavbarDropdownLink,
} from "./NavbarStyles";
import { useLocation } from "react-router-dom";
import { PanelTopClose, PanelTopOpen } from "lucide-react";

const Navbar = () => {
 const { menu } = navLinkList;
 const [showingNavigationDropdown, setShowingNavigationDropdown] =
  useState(false);
 const pathname = useLocation().pathname;

 return (
  <NavbarContainer>
   <NavbarInner>
    <NavbarContent>
     <NavbarBrand to="/">Covid ID</NavbarBrand>
     <NavbarNav>
      {menu.map((item, index) => (
       <NavbarLink key={index} to={item.href} isActive={pathname === item.href}>
        {item.name}
       </NavbarLink>
      ))}
     </NavbarNav>
     <NavbarToggle
      onClick={() =>
       setShowingNavigationDropdown((previousState) => !previousState)
      }
     >
      {showingNavigationDropdown ? <PanelTopClose /> : <PanelTopOpen />}
     </NavbarToggle>
    </NavbarContent>
   </NavbarInner>
   <NavbarDropdown isOpen={showingNavigationDropdown}>
    {menu.map((item, index) => (
     <NavbarDropdownLink
      key={index}
      to={item.href}
      isActive={pathname === item.href}
     >
      {item.name}
     </NavbarDropdownLink>
    ))}
   </NavbarDropdown>
  </NavbarContainer>
 );
};

export default Navbar;
