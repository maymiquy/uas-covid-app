import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../utils/theme';

export const NavbarContainer = styled.nav`
  background-color: ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.gray300};
  width: 100%;
  color: ${theme.colors.white};
  position: fixed;
  padding: 0;
  top: 0;
  z-index: 20;
  transition: all 0.3s ease-linear;

  @media (min-width: ${theme.screens.md}) {
    box-shadow: ${theme.shadows.md};
  }
`;

export const NavbarInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (min-width: ${theme.screens.sm}) {
    padding: 0 2rem;
  }

  @media (min-width: ${theme.screens.md}) {
    padding: 0 8rem;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
`;

export const NavbarBrand = styled(Link)`
  font-size: ${theme.fontSize.xl};
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.white};
  line-height: 20px;

  @media (min-width: ${theme.screens.md}) {
    font-size: ${theme.fontSize['2xl']};
  }
`;

export const NavbarNav = styled.div`
  display: none;
  gap: 2rem;
  align-items: center;

  @media (min-width: ${theme.screens.md}) {
    display: flex;
  }
`;

export const NavbarLink = styled(Link)`
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
  text-decoration: none;
  color: ${theme.colors.white};
  white-space: nowrap;
  transition: color 0.15s ease-in-out;
  line-height: 20px;

  &:hover {
    color: ${theme.colors.gray300};
  }

  ${({ active }) =>
    active &&
    `
    color: ${theme.colors.gray300};
    border-bottom: 2px solid ${theme.colors.gray300};};
  `}
`;

export const NavbarToggle = styled.button`
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${theme.colors.white};
  background-color: transparent;
  border: none;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    color: ${theme.colors.gray100};
  }

  &:focus {
    color: ${theme.colors.gray300};
  }

  @media (min-width: ${theme.screens.md}) {
    display: none;
  }
`;

export const NavbarDropdown = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  padding: 1rem 0.5rem;

  @media (min-width: ${theme.screens.md}) {
    display: none;
  }
`;

export const NavbarDropdownLink = styled(Link)`
  display: block;
  font-size: ${theme.fontSize.sm};
  font-weight: 500;
  text-decoration: none;
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    background-color: ${theme.colors.tertiary700};
    color: ${theme.colors.gray300};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.accent};
  `}
`;