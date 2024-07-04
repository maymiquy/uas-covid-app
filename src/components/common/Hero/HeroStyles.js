import styled from "styled-components";
import theme from "../../../utils/theme";

export const HeroSection = styled.section`
  background-color: ${theme.colors.white};
  width: 100%;
  padding: 6rem 2.5rem;
  min-height: 100vh;

  @media (min-width: ${theme.screens.md}) {
    padding: 12rem 8rem 0rem 8rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: end;

  @media (min-width: ${theme.screens.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;

  @media (min-width: ${theme.screens.md}) {
    margin-top: 4rem;
    width: 65%;
  }
`;

export const Heading = styled.h1`
  font-size: ${theme.fontSize['3xl']};
  font-weight: 600;
  color: ${theme.colors.primary};
  line-height: 0px;

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSize['4xl']};
  }
`;

export const Subheading = styled.h3`
  font-size: ${theme.fontSize.md};
  font-weight: 500;
  color: ${theme.colors.secondary};
  line-height: 0px;

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const Description = styled.p`
  
  color: ${theme.colors.accent};
  margin-bottom: 20px;
  text-align: justify;
  font-size: ${theme.fontSize.sm};
  font-weight: 500;

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSize.md};
    width: 60%;
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  @media (min-width: ${theme.screens.md}) {
    width: auto;
  }
`;