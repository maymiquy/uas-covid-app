import React from "react";
import menu from "../../utils/constants/menu";
const Navbar = () => {
 const [showingNavigationDropdown, setShowingNavigationDropdown] =
  React.useState(false);
 const [isActive, setActive] = React.useState(menu[0].id);

 const handleActiveLink = (id) => {
  setActive(menu.find((item) => item.id === id));
 };

 return (
  <>
   <nav className="bg-primary border-b w-full text-white border-gray-300 md:shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-row w-full justify-evenly items-center h-[4.5rem]">
      <div className="flex justify-between w-full">
       <div className="shrink-0 flex items-center text-2xl md:text-3xl font-semibold text-white">
        <a href="/">Covid ID</a>
       </div>

       <div className="hidden space-x-8 md:ms-10 md:flex items-center">
        {menu.map((item, index) => (
         <a
          key={index}
          href={item.id}
          className={`font-medium text-sm text-nowrap hover:text-gray-300 leading-5 transition duration-150 ease-in-out ${
           isActive?.id === item.id
            ? " text-gray-500 border-b-2 "
            : " text-white border-transparent"
          }`}
          onClick={() => handleActiveLink(item.id)}
         >
          {item.name}
         </a>
        ))}
       </div>
      </div>

      <div className="-me-2 flex items-center md:hidden">
       <button
        onClick={() =>
         setShowingNavigationDropdown((previousState) => !previousState)
        }
        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-white focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
       >
        <svg
         className="h-6 w-6"
         stroke="currentColor"
         fill="none"
         viewBox="0 0 24 24"
        >
         <path
          className={!showingNavigationDropdown ? "inline-flex" : "hidden"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
         />
         <path
          className={showingNavigationDropdown ? "inline-flex" : "hidden"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
         />
        </svg>
       </button>
      </div>
     </div>
    </div>

    <div
     className={(showingNavigationDropdown ? "block" : "hidden") + " md:hidden"}
    >
     <div className="flex flex-col space-y-3 shadow-md">
      {menu.map((item, index) => (
       <div
        className={`py-2 my-2 font-medium text-sm text-nowrap ps-3  hover:bg-white hover:text-gray-500
        ${isActive?.id === item.id ? " bg-white text-gray-500" : ""}
       `}
        onClick={() => handleActiveLink(item.id)}
       >
        <a key={index} href={item.id}>
         {item.name}
        </a>
       </div>
      ))}
     </div>
    </div>
   </nav>
  </>
 );
};

export default Navbar;
