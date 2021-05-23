import { PositionEnum } from '../interfaces/HeaderArrayInterface';

export const headerTop = [
  {
    header: 'New Culture',
    position: PositionEnum.first,
  },
  {
    header: 'New Vision',
    position: PositionEnum.second,
  },
  {
    header: 'New Language',
    position: PositionEnum.last,
  },
];

export const headerMiddle = [
  {
    header: 'Hiragana',
    position: PositionEnum.first,
  },
  {
    header: 'Katakana',
    position: PositionEnum.second,
  },
  {
    header: 'Kanji',
    position: PositionEnum.last,
  },
];

const headerBottom = [
  {
    header: 'At Your Pace',
    position: PositionEnum.first,
  },
  {
    header: 'Website',
    position: PositionEnum.second,
  },
  {
    header: 'Mobile',
    position: PositionEnum.last,
  },
];

const HeadersArrays = {
  top: headerTop,
  middle: headerMiddle,
  bottom: headerBottom,
};

export default HeadersArrays;
