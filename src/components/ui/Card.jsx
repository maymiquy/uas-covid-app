import styled from "styled-components";
import theme from "../../utils/theme";

const CardRoot = styled.div`
 display: block;
 padding: 1.5rem;
 background-color: ${theme.colors.white};
 border: 1px solid ${theme.colors.tertiary};
 border-radius: 0.75rem;
 box-shadow: ${theme.shadows.md};
 transition: background-color 0.2s ease-in-out;

 &:hover {
  background-color: ${theme.colors.gray100};
 }
`;

const CardHeader = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1.5rem;
 text-align: center;

 h4 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.accent};

  @media (min-width: 768px) {
   font-size: 2.25rem;
  }
 }

 h4.sub {
  font-weight: 600;
  letter-spacing: -0.025em;
 }
`;

const CardBody = styled.div`
 width: 100%;
 height: min-content;
`;

const Card = ({ children, styles, ...props }) => {
 return (
  <CardRoot style={{ styles }} {...props}>
   {children}
  </CardRoot>
 );
};

Card.Header = ({ heading, subHeading, textColor, ...props }) => {
 return (
  <CardHeader {...props}>
   <h4>{heading}</h4>
   <h4 style={{ color: textColor }}>{subHeading}</h4>
  </CardHeader>
 );
};

Card.Body = ({ children, ...props }) => {
 return <CardBody {...props}>{children}</CardBody>;
};

export default Card;
