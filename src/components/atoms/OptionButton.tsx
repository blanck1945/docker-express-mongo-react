import React from 'react';
import { Button, ExitButton } from './OptionsButtonStyles';

interface OptionBtnProps {
  header?: string;
  exit?: boolean;
  value: string;
  infoState: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setInfoState: React.Dispatch<React.SetStateAction<string>>;
  setAlphabet?: React.Dispatch<React.SetStateAction<string>>;
  alphabet?: string;
  children: string;
}

const OptionButton = ({
  header,
  children,
  value,
  infoState,
  setState,
  setInfoState,
  setAlphabet,
  alphabet,
  exit,
}: OptionBtnProps) => {
  const setTwoBtn = () => {
    setInfoState(alphabet ? alphabet : 'none');
    setState(value);
    if (setAlphabet && alphabet) {
      setAlphabet(alphabet);
    }
  };

  if (exit) {
    return <ExitButton onClick={() => setTwoBtn()}>{children}</ExitButton>;
  }

  console.log(infoState);
  return <Button onClick={() => setTwoBtn()}>{children}</Button>;
};

export default OptionButton;
