import styled from "styled-components";
import theme from "../../utils/theme";

const TableRoot = styled.div`
 overflow-x: scroll;
 box-shadow: ${theme.shadows.md};
 border-radius: 0.25rem;

 @media (min-width: 768px) {
  border-radius: 0.5rem;
 }
`;

const TableContainer = styled.table`
 width: 100%;
 text-align: left;
 color: ${theme.colors.gray300};
 table-layout: fixed;

 @media (min-width: 768px) {
  table-layout: auto;
 }
`;

const TableHead = styled.thead`
 font-size: 0.5rem;
 text-align: left;
 color: ${theme.colors.accent};
 background-color: ${theme.colors.primary};
 text-transform: uppercase;

 @media (min-width: 768px) {
  font-size: 0.75rem;
 }

 th {
  padding: 0.25rem 0.75rem;

  @media (min-width: 768px) {
   padding: 0.75rem 1.5rem;
  }
 }
`;

const TableBody = styled.tbody`
 font-size: 0.5rem;
 text-align: left;

 @media (min-width: 768px) {
  font-size: 0.75rem;
 }

 td {
  padding: 0.25rem 0.75rem;
  color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray300};

  @media (min-width: 768px) {
   padding: 1rem 1.5rem;
  }
 }
`;

const Table = ({ children, ...props }) => {
 return (
  <TableRoot {...props}>
   <TableContainer>{children}</TableContainer>
  </TableRoot>
 );
};

Table.Head = ({ rows, ...props }) => {
 return (
  <TableHead {...props}>
   <tr>
    {rows.map((item, index) => {
     return <th key={index}>{item}</th>;
    })}
   </tr>
  </TableHead>
 );
};

Table.Body = ({
 iteration,
 province,
 positive,
 recovered,
 medicate,
 dead,
 ...props
}) => {
 return (
  <TableBody {...props}>
   <tr>
    <td>{iteration}</td>
    <td>{province}</td>
    <td>{positive}</td>
    <td>{recovered}</td>
    <td>{medicate}</td>
    <td>{dead}</td>
   </tr>
  </TableBody>
 );
};

export default Table;
