import { KanaInterface } from '../interfaces/KanaInterface';
import hiragana from './Hiragana';
import katakana from './Katakana';
import wordsAlphabet from './Words';

export interface JapaneseAlphabetInterface {
  allHiragana: KanaInterface[];
  allKatakana: KanaInterface[];
  allWords: any;
}

const JapaneseAlphabet: JapaneseAlphabetInterface = {
  allHiragana: hiragana,
  allKatakana: katakana,
  allWords: wordsAlphabet,
};

export default JapaneseAlphabet;
