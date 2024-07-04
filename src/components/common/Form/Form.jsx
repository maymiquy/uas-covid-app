import React, { useContext } from "react";
import { ProvinceContext } from "../../../context/ProvinceContext";
import {
 FormContainer,
 FormContent,
 FormLeft,
 FormRight,
 FormRow,
 FormTitle,
} from "./FormStyles";
import SvgForm from "../../ui/SvgForm";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";

const Form = () => {
 const { provinceData, handleAddData } = useContext(ProvinceContext);
 const [formData, setFormData] = React.useState({
  name: "",
  status: "",
  amount: 0,
 });

 const { name, status, amount } = formData;

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  handleAddData(formData);
  setFormData({
   name: "",
   status: "",
   amount: 0,
  });
 };

 const inputStyles = {
  width: "100%",
  "@media (min-width: 768px)": {
   width: "50%",
  },
 };

 return (
  <FormContainer>
   <FormContent>
    <FormLeft>
     <SvgForm />
    </FormLeft>
    <FormRight>
     <FormTitle>Add Data</FormTitle>
     <form onSubmit={handleSubmit}>
      <FormRow>
       <Input style={inputStyles}>
        <Input.Label label="Province" htmlFor="name" />
        <Select id="name" name="name" value={name} onChange={handleChange}>
         <Select.Option selected disabled value="">
          Choose Province
         </Select.Option>
         {provinceData.map((item, index) => (
          <Select.Option key={index} value={item.name} name={item.name} />
         ))}
        </Select>
       </Input>
       <Input style={inputStyles}>
        <Input.Label label="Status" htmlFor="status" />
        <Select
         id="status"
         name="status"
         value={status}
         onChange={handleChange}
        >
         <Select.Option selected disabled value="">
          Choose Status
         </Select.Option>
         <Select.Option value="confirmed" name="Confirmed" />
         <Select.Option value="recovered" name="Recovered" />
         <Select.Option value="treatment" name="Treatment" />
         <Select.Option value="death" name="Death" />
        </Select>
       </Input>
      </FormRow>
      <div style={{ marginTop: "20px" }}>
       <Input>
        <Input.Label label="Amount" htmlFor="amount" />
        <Input.Field
         type="number"
         id="amount"
         name="amount"
         value={amount}
         onChange={handleChange}
        />
       </Input>
      </div>
      <Button
       style={{ marginTop: "20px" }}
       type="submit"
       variant="primary"
       size="xl"
      >
       Add
      </Button>
     </form>
    </FormRight>
   </FormContent>
  </FormContainer>
 );
};

export default Form;
