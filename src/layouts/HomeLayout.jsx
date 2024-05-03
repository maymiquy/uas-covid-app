import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HomeLayout = (props) => {
 const { children } = props;

 return (
  <>
   <div className="flex flex-col">
    <Navbar />
    <main className="w-full relative">{children}</main>
    <Footer />
   </div>
  </>
 );
};

export default HomeLayout;
