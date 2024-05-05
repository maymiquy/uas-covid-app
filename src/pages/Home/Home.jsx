import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import Hero from "../../components/partials/Hero/Hero";
import Statistic from "../../components/partials/Statistic/Statistic";
import Province from "../../components/partials/Province/Province";
import AddFormProvince from "../../components/partials/AddFormProvince/AddFormProvince";
import data from "../../utils/constants/provinces";

function HomePage() {
 const [provinceData, setProvinceData] = React.useState(data.provinces);

 const handleDataUpdate = (updatedData) => {
  setProvinceData(updatedData);
 };

 return (
  <>
   <HomeLayout>
    <Hero />
    <Statistic />
    <Province provinceData={provinceData} />
    <AddFormProvince onDataUpdate={handleDataUpdate} />
   </HomeLayout>
  </>
 );
}

export default HomePage;
