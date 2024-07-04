import React from "react";
import HomeLayout from "../../layouts/MainLayout";
import data from "../../utils/constants/provinces";

function HomePage() {
 const [provinceData, setProvinceData] = React.useState(data.provinces);

 const handleDataUpdate = (updatedData) => {
  setProvinceData(updatedData);
 };

 return (
  <>
   <h1>Home</h1>
  </>
 );
}

export default HomePage;
