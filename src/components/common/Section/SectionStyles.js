import styled from "styled-components";
import theme from "../../../utils/theme";

export const SectionRoot = styled.section`
 width: 100%;
 padding: 4rem 2rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 @media (min-width: ${theme.screens.md}) {
    padding: 4rem 8rem;
  }
`;

export const SectionHeader = styled.div`
 text-align: center;

 h2 {
  font-size: ${theme.fontSize["4xl"]};
  font-weight: 500;
  line-height: 10px;
  color: ${theme.colors.primary};
 }

 p {
  font-size: ${theme.fontSize.lg};
  font-weight: 400;
  line-height: 10px;
  color: ${theme.colors.secondary};
 }
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }
`;
