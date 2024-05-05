import React, { useState } from "react";
import Form from "../../Form/Form";
import Input from "../../ui/Input";
import SvgForm from "../../ui/SvgForm";
import Select from "../../ui/Select";
import data from "../../../utils/constants/provinces";
import Button from "../../ui/Button";

const AddFormProvince = ({ onDataUpdate }) => {
 const [province, setProvince] = useState("");
 const [status, setStatus] = useState("");
 const [amount, setAmount] = useState(0);

 const handleSubmit = (e) => {
  e.preventDefault();

  const updatedProvinces = [...data.provinces];

  const selectedProvinceIndex = data.provinces.findIndex(
   (item) => item.kota === province,
  );

  if (status === "kasus") {
   data.provinces[selectedProvinceIndex].kasus += Number(amount);
  } else if (status === "sembuh") {
   data.provinces[selectedProvinceIndex].sembuh += Number(amount);
  } else if (status === "meninggal") {
   data.provinces[selectedProvinceIndex].meninggal += Number(amount);
  } else if (status === "dirawat") {
   data.provinces[selectedProvinceIndex].dirawat += Number(amount);
  }

  onDataUpdate(updatedProvinces);

  window.scrollTo({
   top: 1080,
   behavior: "smooth",
  });

  setProvince("");
  setStatus("");
  setAmount(0);
 };

 return (
  <section id="form" className="bg-gray-100 w-full p-20 md:py-8 md:px-24">
   <h2 className="text-4xl text-center md:hidden font-semibold text-primary">
    Add Data
   </h2>
   <div className="w-full flex md:flex-row flex-col justify-center items-center">
    <div className="w-full md:w-1/2 flex justify-center items-start md:mt-0 overflow-hidden">
     <SvgForm className="w-[280px] h-[380px]" />
    </div>
    <div className="w-full md:w-1/2 pt-2 px-4">
     <h2 className="text-4xl my-6 ms-7 hidden md:flex font-semibold text-primary">
      Add Data
     </h2>
     <Form onSubmit={handleSubmit}>
      <div className="space-y-4 md:space-y-6">
       <div className="my-2 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2 w-full">
        <Input.Root className="md:w-1/2">
         <Input.Label htmlFor="province" label="Province" />
         <Select.Root
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
         >
          <option selected className="text-gray-400 hidden text-xs">
           Choose Province
          </option>
          {data.provinces.map((item, index) => (
           <Select.Option key={index} value={item.kota} name={item.kota} />
          ))}
         </Select.Root>
        </Input.Root>
        <Input.Root className="md:w-1/2">
         <Input.Label htmlFor="status" label="Status" />
         <Select.Root
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
         >
          <option selected className="text-gray-400 hidden text-xs">
           Choose Status
          </option>
          <Select.Option value="kasus" name="Positive" />
          <Select.Option value="sembuh" name="Recovered" />
          <Select.Option value="meninggal" name="Dead" />
          <Select.Option value="dirawat" name="Medicate" />
         </Select.Root>
        </Input.Root>
       </div>
       <div className="my-2">
        <Input.Root>
         <Input.Label htmlFor="amount" label="Amount" />
         <Input.Field
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
         />
        </Input.Root>
       </div>
      </div>
      <Button type="submit" title="Add" className="mt-8 w-1/2" />
     </Form>
    </div>
   </div>
  </section>
 );
};

export default AddFormProvince;
