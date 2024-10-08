import React from "react";
import Card from "../ui/Card";
import theme from "../../utils/theme";
import Section from "../common/Section/Section";
import GridContainer from "../ui/GridContainer";

const Carousel = (props) => {
 const { data = [] } = props;
 return (
  <Section
   styles={{ background: theme.colors.tertiary }}
   heading="Global Situation"
   subHeading="Data Covid in Global"
  >
   <GridContainer>
    {data.map((item, index) => (
     <a href={"https://github.com/maymiquy"} key={index}>
      <Card styles={{ width: "360px", height: "360px" }}>
       <Card.Header
        heading={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        subHeading={item.total}
        textColor={
         index === 0
          ? theme.colors.primary
          : index === 1
          ? theme.colors.secondary
          : theme.colors.danger
        }
       />
      </Card>
     </a>
    ))}
   </GridContainer>
  </Section>
 );
};

export default Carousel;
