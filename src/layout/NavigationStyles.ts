import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { NavLink } from 'react-router-dom';

// Global Styles.
const {
  font: { font55, font40 },
  colors: { mainBlue, navLinkGray },
} = GlobalStyles;

// Main Navigation bar.
export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  background-color: ${mainBlue};
  color: white;
  width: 100%;
  height: 129px;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  padding-left: 10px;
`;

// Kana Logo.
export const KanaLogo = styled.h1`
  font-size: ${font55};
`;

// Nav Links div.
export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Nav Links. (Router)
export const PageNavLink = styled(NavLink)`
  font-size: ${font40};
  color: ${navLinkGray};
  text-decoration: none;
`;
