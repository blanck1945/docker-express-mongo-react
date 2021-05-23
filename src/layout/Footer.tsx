import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

// Global Styles.
const {
  colors: { secondaryCopyright, secondaryBlueShades2, mainTextGray },
} = GlobalStyles;

// Footer styles.
const FooterDiv = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 700px;
`;

// Main Fototer styles.
const MainFooter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${secondaryBlueShades2};
`;

// Copyright Footer styles.
const CopyrightDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: ${secondaryCopyright};
  color: ${mainTextGray};
`;

const Footer = () => {
  return (
    <FooterDiv>
      <MainFooter />
      <CopyrightDiv>
        Copyright Learn Kanas - Okubo {new Date().getFullYear()}
      </CopyrightDiv>
    </FooterDiv>
  );
};

export default Footer;
