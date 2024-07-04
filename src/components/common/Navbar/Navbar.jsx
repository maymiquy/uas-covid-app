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
      <svg
       className={`h-6 w-6 ${
        showingNavigationDropdown ? "hidden" : "inline-flex"
       }`}
       stroke="currentColor"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
       />
      </svg>
      <svg
       className={`h-6 w-6 ${
        showingNavigationDropdown ? "inline-flex" : "hidden"
       }`}
       stroke="currentColor"
       fill="none"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
       />
      </svg>
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
