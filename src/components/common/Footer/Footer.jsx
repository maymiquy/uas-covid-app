import React from "react";
import navLinkList from "../../../utils/constants/navlink-list";
import {
 FooterContainer,
 FooterContent,
 BrandContainer,
 MenuContainer,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
 const { menu } = navLinkList;

 return (
  <FooterContainer>
   <FooterContent>
    <BrandContainer>
     <a href="/">
      <span>Covid ID</span>
     </a>
     <p>
      Developed by{" "}
      <a
       href="https://github.com/maymiquy"
       className="font-semibold underline hover:text-gray-300"
      >
       maymiquy
      </a>
     </p>
    </BrandContainer>
    <MenuContainer>
     {menu.map((item, index) => (
      <Link key={index} to={item.href} className="menu-item">
       {item.name}
      </Link>
     ))}
    </MenuContainer>
   </FooterContent>
  </FooterContainer>
 );
};

export default Footer;
