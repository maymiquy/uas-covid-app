import styled from "styled-components";
import theme from "../../utils/theme";

const SelectRoot = styled.select`
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

const SelectOption = styled.option``;

const Select = ({ children, id, value, onChange, ...props }) => {
 return (
  <SelectRoot id={id} value={value} onChange={onChange} {...props}>
   {children}
  </SelectRoot>
 );
};

Select.Option = ({ name, value, ...props }) => {
 return (
  <SelectOption value={value} {...props}>
   {name}
  </SelectOption>
 );
};

export default Select;
