import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HomeLayout = (props) => {
 const { children } = props;

 return (
  <>
   <Navbar />
   <main className="w-full">{children}</main>
   <Footer />
  </>
 );
};

export default HomeLayout;
