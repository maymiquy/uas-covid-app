import React from "react";
import theme from "../../utils/theme";
import Table from "../ui/Table";
import Section from "../common/Section/Section";
import Pagination from "../ui/Paginantion";

const Province = (props) => {
 const { data = [] } = props;

 return (
  <Section
   heading="Situation per Day's by Province"
   subHeading="Choices Covid per Day's Metrics Province"
   styles={{ background: theme.colors.white }}
  >
   <Table>
    <Table.Head
     rows={["No", "Province", "Confirmed", "Recovered", "Treatment", "Death"]}
    />
    <Table.Body>
     {data.map((item, index) => (
      <tr key={index}>
       <td>{index + 1}</td>
       <td>{item.name}</td>
       <td>
        {item.numbers?.confirmed} {item.confirmed}
       </td>
       <td>
        {item.numbers?.recovered} {item.recovered}
       </td>
       <td>
        {item.numbers?.treatment} {item.treatment}
       </td>
       <td>
        {item.numbers?.death} {item.death}
       </td>
      </tr>
     ))}
    </Table.Body>
   </Table>
   <Pagination
    currentPage={props.currentPage}
    totalItems={props.totalItems}
    itemsPerPage={props.itemsPerPage}
    onPageChange={props.onPageChange}
   />
  </Section>
 );
};

export default Province;
