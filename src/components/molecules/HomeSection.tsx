import React from 'react';
import styled from 'styled-components';

// Home Section div.
const HomeSection = styled.div`
  width: 80%;
  margin: auto;
  min-height: 600px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
`;

interface HomeSectionProps {
  children: JSX.Element | JSX.Element[];
}

const HomeSections = ({ children }: HomeSectionProps) => {
  return <HomeSection>{children}</HomeSection>;
};

export default HomeSections;
