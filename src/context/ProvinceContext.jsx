import { createContext, useState } from "react";
import data from "../utils/constants/provinces";

export const ProvinceContext = createContext();

export const ProvinceProvider = ({ children }) => {
 const [provinceData, setProvinceData] = useState(data.provinces);
 const [currentPage, setCurrentPage] = useState(1);

 const handleAddData = (newData) => {
  const existingProvinceIndex = provinceData.findIndex(
   (item) => item.name === newData.name,
  );

  if (existingProvinceIndex !== -1) {
   const updatedProvinceData = [...provinceData];

   updatedProvinceData[existingProvinceIndex] = {
    ...updatedProvinceData[existingProvinceIndex],
    [newData.status]:
     updatedProvinceData[existingProvinceIndex][newData.status] +
     newData.amount,
   };

   setProvinceData(updatedProvinceData);
  } else {
   const newProvinceData = {
    name: newData.name,
    confirmed: newData.status === "confirmed" ? newData.amount : 0,
    recovered: newData.status === "recovered" ? newData.amount : 0,
    death: newData.status === "death" ? newData.amount : 0,
    treatment: newData.status === "treatment" ? newData.amount : 0,
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
