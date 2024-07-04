import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const ButtonBase = styled.button`
 font-weight: bold;
 border: none;
 padding: 0.5rem 1rem;
 border-radius: 0.25rem;
 box-shadow: ${theme.shadows.md};
 transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
 font-family: ${theme.fontFamily.poppins};
`;

const getButtonSize = (size) => {
 switch (size) {
  case "sm":
   return css`
    width: 25%;
   `;
  case "md":
   return css`
    width: 50%;
   `;
  case "lg":
   return css`
    width: 75%;
   `;
  case "xl":
   return css`
    width: 100%;
   `;
  default:
   return css`
    width: 50%;
   `;
 }
};

const getButtonVariant = (variant) => {
 switch (variant) {
  case "primary":
   return css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
     background-color: ${theme.colors.primary700};
    }
   `;
  case "secondary":
   return css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};

    &:hover {
     background-color: ${theme.colors.secondary700};
    }
   `;
  case "tertiary":
   return css`
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.accent};

    &:hover {
     background-color: ${theme.colors.gray300};
    }
   `;
  case "danger":
   return css`
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};

    &:hover {
     background-color: ${theme.colors.danger700};
    }
   `;
  case "paginate":
   return css`
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.accent};

    &:hover {
     background-color: ${theme.colors.gray300};
     color: ${theme.colors.accent};
    }
   `;
  default:
   return css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
     background-color: ${theme.colors.primary700};
    }
   `;
 }
};

const Button = styled(ButtonBase)`
 ${(props) => getButtonVariant(props.variant)}
 ${(props) => getButtonSize(props.size)}
${(props) => props.children}
`;

export default Button;
