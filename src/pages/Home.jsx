import React, { useEffect, useState } from "react";
import Carousel from "../components/Global/Carousel/Carousel";
import { fetchGlobalCovidData } from "../services/api";

function HomePage() {
 const [carouselData, setCarouselData] = useState();

 useEffect(() => {
  const fetchCarouselData = async () => {
   const data = await fetchGlobalCovidData();
   setCarouselData(data.global);
  };

  fetchCarouselData();
 }, []);

 return (
  <>
   <Carousel data={carouselData} />
  </>
 );
}

export default HomePage;
