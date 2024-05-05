import React from "react";
import Table from "../../ui/Table";
import data from "../../../utils/constants/provinces";
import Pagination from "../../ui/Paginantion";

const Province = ({ provinceData }) => {
 const [currentPage, setCurrentPage] = React.useState(1);
 const [itemsPerPage] = React.useState(5);

 const currentItems = React.useMemo(() => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return data.provinces.slice(indexOfFirstItem, indexOfLastItem);
 }, [currentPage, itemsPerPage, data.provinces]);

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 };

 return (
  <section id="province" className="bg-white w-full flex flex-col p-12 md:p-24">
   <div className="text-center">
    <h2 className="text-4xl font-bold text-primary">Province</h2>
    <p className="text-secondary text-lg font-semibold">
     Covid Data of Province in Indonesia
    </p>
   </div>

   <div className="w-full flex flex-col gap-4 items-center mt-14 md:justify-center">
    <Table.Root>
     <Table.Head />
     {currentItems.map((item, index) => (
      <Table.Body
       key={index}
       iteration={index + 1}
       province={item.kota}
       positive={item.kasus}
       recovered={item.sembuh}
       medicate={item.dirawat}
       dead={item.meninggal}
      />
     ))}
    </Table.Root>
   </div>
   <Pagination
    currentPage={currentPage}
    totalItems={data.provinces.length}
    itemsPerPage={itemsPerPage}
    onPageChange={handlePageChange}
   />
  </section>
 );
};

export default Province;
