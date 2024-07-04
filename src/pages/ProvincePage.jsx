import React, { useContext, useState } from "react";
import Province from "../components/Indonesia/Province";
import { ProvinceContext } from "../context/ProvinceContext";

const ProvincePage = () => {
 const { provinceData, currentPage, setCurrentPage } =
  useContext(ProvinceContext);

 const [itemsPerPage] = useState(5);

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = provinceData?.slice(indexOfFirstItem, indexOfLastItem);

 const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

 console.log(provinceData);

 return (
  <>
   <Province
    data={currentItems}
    currentPage={currentPage}
    totalItems={provinceData?.length}
    itemsPerPage={itemsPerPage}
    onPageChange={handlePaginate}
   />
  </>
 );
};

export default ProvincePage;
