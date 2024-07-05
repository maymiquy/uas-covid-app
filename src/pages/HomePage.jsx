import React, { useEffect, useState } from "react";
import Carousel from "../components/Global/Carousel";
import { fetchGlobalCovidData } from "../services/api";
import Region from "../components/Global/Region";

function HomePage() {
 const [carouselData, setCarouselData] = useState();
 const [regionData, setRegionData] = useState();

 useEffect(() => {
  const fetchData = async () => {
   const data = await fetchGlobalCovidData();
   setCarouselData(data.global);
   setRegionData(data.regions);
  };

  fetchData();
 }, []);

 return (
  <>
   <Carousel data={carouselData} />
   <Region data={regionData} />
  </>
 );
}

export default HomePage;
