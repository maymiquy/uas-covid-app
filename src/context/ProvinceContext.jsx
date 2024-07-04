import { createContext, useState } from "react";
import data from "../utils/constants/provinces";

export const ProvinceContext = createContext();

export const ProvinceProvider = ({ children }) => {
 const [provinceData, setProvinceData] = useState(data.provinces);
 const [currentPage, setCurrentPage] = useState(1);

 const handleAddData = (data) => {
  // TODO: Add your logic here
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
