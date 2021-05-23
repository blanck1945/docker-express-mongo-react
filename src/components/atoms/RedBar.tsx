import React from 'react';
import styled from 'styled-components';
import movingWords from '../../data/JapaneseCities';
import GlobalStyles from '../../styles/GlobalStyles';

// Global Styles.
const {
  colors: { mainRed },
  font: { font40 },
} = GlobalStyles;

// Red Bar div.
const RedBar = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${mainRed};
`;

// City span.
const City = styled.span`
  font-size: ${font40};
  color: white;
`;

interface RedBarProps {
  citiesTag?: boolean;
}

const Redbar = ({ citiesTag }: RedBarProps) => {
  const { cities, words } = movingWords;

  const japaneseCities = cities.map((city) => {
    return <City>{city}</City>;
  });

  const japaneseWords = words.map((word) => {
    return <City>{word}</City>;
  });

  return <RedBar>{citiesTag ? japaneseCities : japaneseWords}</RedBar>;
};

export default Redbar;
