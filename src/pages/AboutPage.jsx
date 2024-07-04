import React from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import theme from "../utils/theme";
import SvgAbout from "../components/ui/SvgAbout";

const AboutPage = () => {
 return (
  <Wrapper>
   <ContentWrapper>
    <LeftSection>
     <SvgAbout />
    </LeftSection>
    <RightSection>
     <Title>About COVID-19</Title>
     <Description>
      COVID-19 is a highly contagious respiratory illness caused by a novel
      strain of the coronavirus. It was first identified in Wuhan, China, in
      late 2019 and has since spread globally, leading to a pandemic.
     </Description>
     <Description>
      The virus primarily spreads through close contact with infected
      individuals, and common symptoms include fever, cough, shortness of
      breath, fatigue, and loss of taste or smell. In some cases, COVID-19 can
      lead to severe complications, such as pneumonia and acute respiratory
      distress syndrome (ARDS).
     </Description>
     <ButtonWrapper>
      <Button variant="primary" size="md">
       Learn More
      </Button>
     </ButtonWrapper>
    </RightSection>
   </ContentWrapper>
  </Wrapper>
 );
};

export default AboutPage;

const Wrapper = styled.div`
 padding: 10rem 0;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${theme.colors.tertiary};

 @media (max-width: 768px) {
  padding: 8rem 2rem;
 }
`;

const ContentWrapper = styled.div`
 display: flex;
 width: 80%;
 max-width: 1200px;
 background-color: ${theme.colors.white};
 border-radius: 1rem;

 @media (max-width: 768px) {
  box-shadow: ${theme.shadows.lg};
  flex-direction: column;
  width: 100%;
  border-radius: 0;
  box-shadow: none;
 }
`;

const LeftSection = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 2rem;
`;

const RightSection = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding: 2rem;

 @media (max-width: 768px) {
  padding: 2rem;
 }
`;

const Title = styled.h1`
 font-size: ${theme.fontSize["4xl"]};
 font-weight: 600;
 color: ${theme.colors.primary};
 margin-bottom: 2rem;
 line-height: 10px;

 @media (max-width: 768px) {
  font-size: ${theme.fontSize["3xl"]};
 }
`;

const Description = styled.p`
 font-size: ${theme.fontSize.md};
 color: ${theme.colors.accent};
 margin-bottom: 1rem;
 line-height: 20px;

 @media (max-width: 768px) {
  font-size: ${theme.fontSize.base};
 }
`;

const ButtonWrapper = styled.div`
 width: 100%;
 margin-top: 1rem;

 @media (max-width: 768px) {
  width: 100%;
 }
`;
