import React, { useContext, useEffect, useState } from "react";
import Carousel from "../components/Indonesia/Carousel";
import Province from "../components/Indonesia/Province";
import { fetchIndonesiaCovidData } from "../services/api";
import { ProvinceContext } from "../context/ProvinceContext";

const IndonesiaPage = () => {
 const [carouselData, setCarouselData] = useState();
 const [provinceData, setProvinceData] = useState();
 const { currentPage, setCurrentPage } = useContext(ProvinceContext);
 const [itemsPerPage] = useState(5);

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = provinceData?.slice(indexOfFirstItem, indexOfLastItem);

 useEffect(() => {
  const fetchData = async () => {
   const data = await fetchIndonesiaCovidData();
   setCarouselData(data.indonesia);
   setProvinceData(data.regions);
  };

  fetchData();
 }, []);

 const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
  <>
   <Carousel data={carouselData} />
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

export default IndonesiaPage;
