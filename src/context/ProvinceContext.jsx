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

   setProvinceData(updatedProvinceData);
  } else {
   const newProvinceData = {
    name,
    confirmed: status === "confirmed" ? amount : 0,
    recovered: status === "recovered" ? amount : 0,
    death: status === "death" ? amount : 0,
    treatment: status === "treatment" ? amount : 0,
   };
   setProvinceData([...provinceData, newProvinceData]);
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
