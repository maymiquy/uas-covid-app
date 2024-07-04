import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/common/Hero/Hero";

const MainLayout = (props) => {
 const { children } = props;

 return (
  <>
   <Navbar />
   <Hero />
   <main>{children}</main>
   <Footer />
  </>
 );
};

export default MainLayout;
