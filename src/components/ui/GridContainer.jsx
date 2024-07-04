import React from "react";
import styled from "styled-components";

const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 gap: 1rem;
 justify-content: center;
 align-items: center;
 margin-top: 3.5rem;

 @media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
 }

 a {
  text-decoration: none;
 }
`;

const GridContainer = (props) => {
 return <Container>{props.children}</Container>;
};

export default GridContainer;
