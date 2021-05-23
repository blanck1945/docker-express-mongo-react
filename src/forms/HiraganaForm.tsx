import { useState } from 'react';
import JapaneseAlphabet from '../data/Alphabets';

function HiraganaForm() {
  const { allHiragana } = JapaneseAlphabet;

  const getWord = () => {
    return allHiragana[Math.floor(Math.random() * allHiragana.length)];
  };

  const [hiraganaForm, setHirganaForm] = useState({
    formBuilder: [
      {
        word: getWord,
        name: 'res1',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res2',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res3',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res4',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res5',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res6',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res7',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res8',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res9',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res10',
        value: '',
        response: '',
      },
    ],
  });

  return {
    hiraganaForm,
    setHirganaForm,
  };
}

export default HiraganaForm;
