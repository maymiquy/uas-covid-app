import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

const Form = React.forwardRef(({}, ref) => {
 const { provinceData, handleAddData } = useContext(ProvinceContext);
 const [isScrolling, setIsScrolling] = useState(false);
 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm();

 useEffect(() => {
  if (isScrolling) {
   const currentPosition = window.pageYOffset;
   const targetPosition = 600;
   const distance = targetPosition - currentPosition;
   const duration = 1000;
   let start = null;

   function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const scrollY =
     currentPosition + distance * easeInOutQuad(progress / duration);
    window.scrollTo(0, scrollY);
    if (progress < duration) {
     window.requestAnimationFrame(step);
    } else {
     setIsScrolling(false);
    }
   }

   function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
   }

   window.requestAnimationFrame(step);
  }
 }, [isScrolling]);

 const onSubmit = (data) => {
  handleAddData(data.name, data.status, parseInt(data.amount));
  setIsScrolling(true);
  reset({
   name: "a",
   status: "a",
   amount: "",
  });
 };

 const inputStyles = {
  width: "100%",
  "@media (minWidth: 768px)": {
   width: "50%",
  },
 };

 return (
  <FormContainer ref={ref}>
   <FormContent>
    <FormLeft>
     <SvgForm />
    </FormLeft>
    <FormRight>
     <FormTitle>Add Data</FormTitle>
     <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
       <Input style={inputStyles}>
        <Input.Label label="Province" htmlFor="name" />
        <Select
         style={{ color: "gray" }}
         {...register("name", { required: true, minLength: 2 })}
         onFocus={(e) => (e.target.style.color = "black")}
        >
         <option selected disabled value="a">
          Choose Province
         </option>
         {provinceData.map((item, index) => (
          <Select.Option key={index} value={item.name} name={item.name} />
         ))}
        </Select>
        {errors.name && (
         <span style={{ color: "red", fontSize: "12px" }}>
          Province is required
         </span>
        )}
       </Input>
       <Input style={inputStyles}>
        <Input.Label label="Status" htmlFor="status" />
        <Select
         style={{ color: "gray" }}
         {...register("status", { required: true, minLength: 2 })}
         onFocus={(e) => (e.target.style.color = "black")}
        >
         <option selected disabled value="a">
          Choose Status
         </option>
         <Select.Option value="confirmed" name="Confirmed" />
         <Select.Option value="recovered" name="Recovered" />
         <Select.Option value="treatment" name="Treatment" />
         <Select.Option value="death" name="Death" />
        </Select>
        {errors.status && (
         <span style={{ color: "red", fontSize: "12px" }}>
          Status is required
         </span>
        )}
       </Input>
      </FormRow>
      <div style={{ marginTop: "20px" }}>
       <Input>
        <Input.Label label="Amount" htmlFor="amount" />
        <Input.Field
         placeholder="Add total amount of cases"
         type="number"
         id="amount"
         {...register("amount", { required: true, min: 1 })}
        />
        {errors.amount && (
         <span style={{ color: "red", fontSize: "12px" }}>
          Amount is required and must be greater than 0
         </span>
        )}
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
});

export default Form;
