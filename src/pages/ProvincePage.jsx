import React, { useContext, useEffect, useState } from "react";
import Province from "../components/Indonesia/Province";
import { ProvinceContext } from "../context/ProvinceContext";
import Form from "../components/common/Form/Form";
import { useSearchParams } from "react-router-dom";

const ProvincePage = () => {
 const { provinceData, currentPage, setCurrentPage } =
  useContext(ProvinceContext);
 const itemsPerPage = 5;
 const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
  (async () => {
   const storedPage = searchParams.get("page");
   if (storedPage) {
    setCurrentPage(parseInt(storedPage));
   }
  })();
 }, []);

 useEffect(() => {
  setSearchParams({
   table: "province",
   page: currentPage.toString(),
  });
 }, [currentPage, setSearchParams]);

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = provinceData?.slice(indexOfFirstItem, indexOfLastItem);

 const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
  <>
   <Province
    data={currentItems}
    currentPage={currentPage}
    totalItems={provinceData?.length}
    itemsPerPage={itemsPerPage}
    onPageChange={handlePaginate}
   />
   <Form />
  </>
 );
};

export default ProvincePage;
