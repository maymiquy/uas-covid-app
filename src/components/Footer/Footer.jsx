import React from "react";
import menu from "../../utils/constants/menu";

const Footer = () => {
 return (
  <footer className="bg-primary border-t w-full text-white border-gray-300 md:shadow-md">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-row w-full justify-evenly items-center h-28">
     <div className="flex justify-between items-center w-full">
      <div className="shrink-0 flex flex-col text-start space-y-2 text-white">
       <a href="/" className="text-xl md:text-2xl font-semibold">
        Covid ID
       </a>
       <p className="text-sm md:text-base">
        Developed by{" "}
        <a
         href="https://github.com/maymiquy"
         className="font-semibold underline hover:text-gray-300"
        >
         maymiquy
        </a>
       </p>
      </div>
      <div className="flex-col space-y-2">
       <h3 className="text-center text-sm md:text-md font-semibold">Menu</h3>
       <div className="font-medium text-xs md:text-sm text-nowrap space-x-2 md:space-x-8 md:ms-10 flex items-center">
        {menu.map((item, index) => (
         <a
          key={index}
          href={item.id}
          className="hover:text-gray-300 leading-5 transition duration-150 ease-in-out"
         >
          {item.name}
         </a>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
