import React, { FC } from 'react';
import navLinks from '../data/NavLinks';
import { KanaLogo, NavLinks, Navbar, PageNavLink } from './NavigationStyles';

interface NavigationProps {
  nav?: string;
}

const Navigation: FC<NavigationProps> = () => {
  const navLinksDis = navLinks.map((link) => {
    return <PageNavLink to={link.path}>{link.header} </PageNavLink>;
  });

  return (
    <Navbar>
      <KanaLogo>Learn Kanas</KanaLogo>
      <NavLinks>{navLinksDis}</NavLinks>
    </Navbar>
  );
};

export default Navigation;
