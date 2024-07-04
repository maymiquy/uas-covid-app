import React from "react";
import Section from "../common/Section/Section";
import Card from "../ui/Card";
import theme from "../../utils/theme";
import styled from "styled-components";
import icons from "../../utils/constants/icons";

const MetricContainer = styled.div`
 align-items: center;
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 h4 {
  color: ${theme.colors.tertiary700};
  font-size: 14px;
  font-weight: 400;
  line-height: 5px;
 }

 p {
  font-size: 18px;
  font-weight: 600;
  line-height: 5px;
 }
`;

const Region = (props) => {
 const { data = [] } = props;

 return (
  <Section
   heading="Situation by Region"
   subHeading="Choices Top Covid Metrics Region"
   styles={{ background: theme.colors.white }}
  >
   {data.map((item, index) => (
    <a href={"https://github.com/maymiquy"} key={index}>
     <Card styles={{ width: "360px", height: "360px" }}>
      <Card.Header heading={item.name.split(" ").pop()} />
      <Card.Body>
       {Object.entries(item.numbers).map(([key, value], index) => (
        <MetricContainer key={index}>
         <div>
          <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
          <p
           style={{
            color:
             key.toString() === "confirmed"
              ? theme.colors.primary
              : key.toString() === "recovered"
              ? theme.colors.secondary
              : theme.colors.danger,
           }}
          >
           {value}
          </p>
         </div>
         {React.cloneElement(React.createElement(icons[index].icon), {
          color: icons[index].color,
         })}
        </MetricContainer>
       ))}
      </Card.Body>
     </Card>
    </a>
   ))}
  </Section>
 );
};

export default Region;
