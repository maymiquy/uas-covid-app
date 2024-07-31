import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Hero = () => {
 const navigate = useNavigate();
 const [isScrolling, setIsScrolling] = useState(false);

 useEffect(() => {
  if (isScrolling) {
   const currentPosition = window.pageYOffset;
   const targetPosition = 1200;
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
     <Button
      variant="primary"
      size="md"
      style={{
       position: "relative",
       overflow: "hidden",
       transition: "transform 1s ease-in-out",
       transform: "translateY(0)",
      }}
      onClick={() => {
       navigate("/province");
       setIsScrolling(true);
      }}
     >
      Add New Statistics
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
