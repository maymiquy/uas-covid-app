import React from "react";
import Button from "./Button";

const Pagination = (props) => {
 const { currentPage, totalItems, itemsPerPage, onPageChange } = props;
 const totalPages = Math.ceil(totalItems / itemsPerPage);

 const renderPageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
   pageNumbers.push(
    <li
     key={i}
     className={`px-3 py-2 ${
      currentPage === i
       ? "bg-primary text-white"
       : "bg-gray-200 hover:bg-gray-300"
     } 
        ${i === 1 ? "rounded-s-md" : ""} 
        ${i === totalPages ? "rounded-e-md" : ""}
     `}
     onClick={() => onPageChange(i)}
    >
     {i}
    </li>,
   );
  }
  return pageNumbers;
 };

 return (
  <div className="mt-4 flex justify-center">
   <Button
    variant="paginate"
    className={`mr-2 text-xs font-medium rounded-s-xl ${
     currentPage === 1
      ? "opacity-50 cursor-not-allowed hover:bg-danger"
      : "hover:bg-gray-300"
    }`}
    title="Prev"
    onClick={currentPage === 1 ? () => {} : () => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
   />
   <ul className="flex">{renderPageNumbers()}</ul>
   <Button
    variant="paginate"
    className={`ml-2 text-xs font-medium rounded-e-xl ${
     currentPage === totalPages
      ? "opacity-50 cursor-not-allowed hover:bg-danger"
      : "hover:bg-gray-300"
    }`}
    title="Next"
    onClick={currentPage === 0 ? () => {} : () => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
   />
  </div>
 );
};

export default Pagination;
