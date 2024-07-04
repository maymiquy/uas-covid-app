import React from "react";
import SvgHero from "../../ui/SvgHero";
import Button from "../../ui/Button";
import {
 HeroSection,
 HeroContainer,
 ContentContainer,
 Heading,
 Subheading,
 Description,
 SvgContainer,
} from "./HeroStyles";

const Hero = () => {
 return (
  <HeroSection id="home">
   <HeroContainer>
    <ContentContainer>
     <Heading>Covid ID</Heading>
     <Subheading>Covid Monitoring</Subheading>
     <Description>
      Our app is a relevant data in Indonesia with the latest data from WHO and
      CDC. Our app is helping people to get information about covid in Indonesia
      and stay safe.
     </Description>
     <Button variant="primary" size="md">
      Vaccine
     </Button>
    </ContentContainer>
    <SvgContainer>
     <SvgHero />
    </SvgContainer>
   </HeroContainer>
  </HeroSection>
 );
};

export default Hero;
