import styled from "styled-components";
import theme from "../../utils/theme";
import React from "react";

const InputRoot = styled.div`
 display: flex;
 flex-direction: column;
`;

const InputLabel = styled.label`
 display: block;
 margin-bottom: 0.5rem;
 font-size: 0.75rem;
 font-weight: bold;
 color: ${theme.colors.accent};

 @media (min-width: 768px) {
  font-size: 0.875rem;
  font-weight: medium;
 }
`;

const InputField = styled.input`
 display: block;
 width: 100%;
 padding: 0.5rem;
 font-size: 0.75rem;
 color: ${theme.colors.gray700};
 background-color: ${theme.colors.white};
 border: 1px solid ${theme.colors.primary};
 border-radius: 0.375rem;

 &:focus {
  outline: none;
  box-shadow: 0 0 0 2px ${theme.colors.primary};
 }

 @media (min-width: 768px) {
  font-size: 0.875rem;
 }

 @media (min-width: 1280px) {
  font-size: 1rem;
 }
`;

const Input = React.forwardRef(({ children, ...props }, ref) => {
 return (
  <InputRoot ref={ref} {...props}>
   {children}
  </InputRoot>
 );
});

Input.Label = ({ htmlFor, label, ...props }) => {
 return (
  <InputLabel htmlFor={htmlFor} {...props}>
   {label}
  </InputLabel>
 );
};

Input.Field = React.forwardRef(
 ({ name, type, id, value, onChange, ...props }, ref) => {
  return (
   <InputField
    ref={ref}
    name={name}
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    {...props}
   />
  );
 },
);

export default Input;
