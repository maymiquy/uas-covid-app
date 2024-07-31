import { createContext, useState } from "react";
import data from "../utils/constants/provinces";

export const ProvinceContext = createContext();

export const ProvinceProvider = ({ children }) => {
 const [provinceData, setProvinceData] = useState(data.provinces);
 const [currentPage, setCurrentPage] = useState(1);

 const handleAddData = (name, status, amount) => {
  const existingProvinceIndex = provinceData.findIndex(
   (item) => item.name === name,
  );

  if (existingProvinceIndex !== -1) {
   const updatedProvinceData = [...provinceData];

   switch (status) {
    case "confirmed":
     updatedProvinceData[existingProvinceIndex].confirmed += amount;
     break;
    case "recovered":
     updatedProvinceData[existingProvinceIndex].recovered += amount;
     break;
    case "death":
     updatedProvinceData[existingProvinceIndex].death += amount;
     break;
    case "treatment":
     updatedProvinceData[existingProvinceIndex].treatment += amount;
     break;
    default:
     break;
   }

   const itemsPerPage = 5;
   const pageIndex = Math.floor(existingProvinceIndex / itemsPerPage);

   setCurrentPage(pageIndex + 1);
   setProvinceData(updatedProvinceData);
  }
 };

 return (
  <ProvinceContext.Provider
   value={{
    provinceData,
    setProvinceData,
    currentPage,
    setCurrentPage,
    handleAddData,
   }}
  >
   {children}
  </ProvinceContext.Provider>
 );
};
