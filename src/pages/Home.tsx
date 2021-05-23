import React from 'react';
import styled from 'styled-components';
import Redbar from '../components/atoms/RedBar';
import CallToAction from '../components/molecules/CallToAction';
import HomeSections from '../components/molecules/HomeSection';
import WordHeaders from '../components/molecules/WordHeaders';
import HeadersArrays from '../data/HeaderArrays';
import GlobalStyles from '../styles/GlobalStyles';

// Global Styles.
const {
  colors: { mainBg },
} = GlobalStyles;

const MainDiv = styled.div`
  background-color: ${mainBg};
`;

const HomePage = () => {
  const { top, middle, bottom } = HeadersArrays;

  return (
    <MainDiv>
      <HomeSections>
        <WordHeaders headerArr={top} />
        <CallToAction flag />
      </HomeSections>
      <Redbar citiesTag />
      <HomeSections>
        <CallToAction write />
        <WordHeaders headerArr={middle} right />
      </HomeSections>
      <Redbar />
      <HomeSections>
        <WordHeaders headerArr={bottom} />
        <CallToAction start />
      </HomeSections>
      <Redbar citiesTag />
    </MainDiv>
  );
};

export default HomePage;
