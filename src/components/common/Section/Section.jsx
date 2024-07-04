import React from "react";
import { SectionHeader, SectionRoot } from "./SectionStyles";

const Section = (props) => {
 return (
  <SectionRoot style={props.styles}>
   <SectionHeader>
    <h2>{props.heading}</h2>
    <p>{props.subHeading}</p>
   </SectionHeader>
   {props.children}
  </SectionRoot>
 );
};

export default Section;
