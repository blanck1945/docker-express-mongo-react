import React from 'react';
import styled from 'styled-components';
import { HeaderArr, PositionEnum } from '../../interfaces/HeaderArrayInterface';
import GlobalStyles from '../../styles/GlobalStyles';

// GlobalStyles
const {
  colors: { mainBlue, secondaryBlueShades4, secondaryBlueShades5 },
  font: { font108, line145 },
} = GlobalStyles;

const Header = styled.h2`
  font-size: ${font108};
  line-height: ${line145};
`;

interface WordHeaderProps {
  headerArr: HeaderArr[];
  right?: boolean;
}

const WordHeaders = ({ headerArr, right }: WordHeaderProps) => {
  const setHeaderColor = (position: PositionEnum) => {
    switch (position) {
      case PositionEnum.first:
        return mainBlue;
      case PositionEnum.second:
        return secondaryBlueShades4;
      case PositionEnum.last:
        return secondaryBlueShades5;
    }
  };

  const words = headerArr.map((word) => {
    return (
      <Header style={{ color: setHeaderColor(word.position) }}>
        {word.header}{' '}
      </Header>
    );
  });

  return <div style={{ marginLeft: right ? '120px' : '' }}>{words}</div>;
};

export default WordHeaders;
