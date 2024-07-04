import styled from "styled-components";
import theme from "../../../utils/theme";

export const FormContainer = styled.section`
  background-color: ${theme.colors.tertiary};
  padding: 4rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem 8rem;
  }
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;    
  }
`;

export const FormRight = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: ${theme.fontSize["3xl"]};
  font-weight: 600;
  line-height: 20px;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;