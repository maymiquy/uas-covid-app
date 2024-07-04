import styled from "styled-components";
import Button from "./Button";

const PaginationRoot = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 1rem;
`;

const PageNumberList = styled.ul`
 display: flex;
 list-style: none;
 padding: 0;
 margin: 0;
`;

const PageNumber = styled.li`
 padding: 0.5rem 0.75rem;
 background-color: ${({ active, theme }) =>
  active ? theme.colors.primary : theme.colors.gray200};
 color: ${({ active, theme }) =>
  active ? theme.colors.white : theme.colors.gray700};
 border-radius: ${({ first }) => (first ? "0.375rem 0 0 0.375rem" : "")};
 border-radius: ${({ last }) => (last ? "0 0.375rem 0.375rem 0" : "")};
 cursor: pointer;
 transition: background-color 0.2s ease-in-out;

 &:hover {
  background-color: ${({ theme }) => theme.colors.gray300};
 }
`;

const PrevNextButton = styled(Button)`
 font-size: 0.75rem;
 font-weight: medium;
 border-radius: ${({ first }) => (first ? "0.375rem 0 0 0.375rem" : "")};
 border-radius: ${({ last }) => (last ? "0 0.375rem 0.375rem 0" : "")};
 opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
 cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
 transition: background-color 0.2s ease-in-out;

 &:hover {
  background-color: ${({ disabled, theme }) =>
   disabled ? theme.colors.danger : theme.colors.gray300};
 }
`;

const Pagination = ({
 currentPage,
 totalItems,
 itemsPerPage,
 onPageChange,
}) => {
 const totalPages = Math.ceil(totalItems / itemsPerPage);

 const renderPageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
   pageNumbers.push(
    <PageNumber
     key={i}
     active={currentPage === i}
     first={i === 1}
     last={i === totalPages}
     onClick={() => onPageChange(i)}
    >
     {i}
    </PageNumber>,
   );
  }
  return pageNumbers;
 };

 return (
  <PaginationRoot>
   <PrevNextButton
    variant="paginate"
    size="sm"
    first
    onClick={
     currentPage === 1 ? undefined : () => onPageChange(currentPage - 1)
    }
    disabled={currentPage === 1}
   >
    Prev
   </PrevNextButton>
   <PageNumberList>{renderPageNumbers()}</PageNumberList>
   <PrevNextButton
    variant="paginate"
    size="sm"
    last
    onClick={
     currentPage === totalPages
      ? undefined
      : () => onPageChange(currentPage + 1)
    }
    disabled={currentPage === totalPages}
   >
    Next
   </PrevNextButton>
  </PaginationRoot>
 );
};

export default Pagination;
