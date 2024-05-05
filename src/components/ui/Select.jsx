import React from "react";
const Select = (props) => {
 const { children, id, value, onChange } = props;

 return (
  <select
   id={id}
   value={value}
   onChange={onChange}
   className="block w-full p-2 text-gray-700 border border-primary rounded-md bg-white text-xs md:text-sm xl:text-md focus:ring-primary focus:ring-2 focus:outline-none"
  >
   {children}
  </select>
 );
};

const Option = (props) => {
 const { name, value } = props;
 return (
  <>
   <option value={value}>{name}</option>
  </>
 );
};

Select.Root = Select;
Select.Option = Option;

export default Select;
