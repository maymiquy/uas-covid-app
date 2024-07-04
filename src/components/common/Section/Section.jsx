import React from "react";
import { SectionContent, SectionHeader, SectionRoot } from "./SectionStyles";

const Section = (props) => {
 return (
  <SectionRoot style={props.styles}>
   <SectionHeader>
    <h2>{props.heading}</h2>
    <p>{props.subHeading}</p>
   </SectionHeader>
   <SectionContent>{props.children}</SectionContent>
  </SectionRoot>
 );
};

export default Section;
