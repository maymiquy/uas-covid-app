import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/common/Hero/Hero";
import { useLocation } from "react-router-dom";

const MainLayout = (props) => {
 const pathname = useLocation().pathname;
 const { children } = props;

 return (
  <>
   <Navbar />
   {pathname === "/" ||
   pathname === "/province" ||
   pathname === "/indonesia" ? (
    <Hero />
   ) : null}
   <main>{children}</main>
   <Footer />
  </>
 );
};

export default MainLayout;
