import styled from "styled-components";
import theme from "../../../utils/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  border-top: 1px solid ${theme.colors.tertiary};
  width: 100%;
  color: ${theme.colors.white};

  @media (min-width: ${theme.screens.md}) {
    box-shadow: ${theme.shadows.md};
  }
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${theme.screens.sm}) {
    padding: 1rem 2rem;
  }

  @media (min-width: ${theme.screens.md}) {
    padding: 1rem 8rem;
  }
`;

export const BrandContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.5rem;

  a > span {
    font-size: ${theme.fontSize.xl};
    font-weight: 600;
    color: ${theme.colors.white};

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSize['2xl']};
    }
  }

  a {
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.white};
    text-decoration: none;
    :hover {
      color: ${theme.colors.tertiary};
    }
  }

  p {
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.white};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  @media (min-width: ${theme.screens.md}) {
      gap: 2rem;
    }

  .menu-item {
    font-size: ${theme.fontSize.xs};
    font-weight: 500;
    white-space: nowrap;
    color: ${theme.colors.white};
    transition: color 0.15s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.tertiary};
    }

    @media (min-width: ${theme.screens.md}) {
      font-size: ${theme.fontSize.sm};
    }
  }
`;