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
  line-height: 30px;
  color: ${theme.colors.primary};
 }

 p {
  font-size: ${theme.fontSize.lg};
  font-weight: 400;
  line-height: 20px;
  color: ${theme.colors.secondary};
 }
`;