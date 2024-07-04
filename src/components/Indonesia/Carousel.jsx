import React from "react";
import theme from "../../utils/theme";
import Card from "../ui/Card";
import Section from "../common/Section/Section";
import GridContainer from "../ui/GridContainer";

const Carousel = (props) => {
 const { data = [] } = props;
 return (
  <Section
   styles={{ background: theme.colors.tertiary }}
   heading="Indonesian Situation"
   subHeading="Data Covid in Indonesian"
  >
   <GridContainer>
    {data.map((item, index) => (
     <a href={"/https://github.com/maymiquy"} key={index}>
      <Card styles={{ width: "360px", height: "360px" }}>
       <Card.Header
        heading={item.status}
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
