import React from 'react';
import StartButton from '../atoms/StartButton';
import {
  CallToActionStyled,
  FlagBg,
  FlagCenter,
  HiraganaCall,
  HiraganaTag,
} from './CallToActionStyles';

// Call to Actions interface.
export interface CallToActionProps {
  flag?: boolean;
  write?: boolean;
  start?: boolean;
}

const CallToAction = ({ flag, write, start }: CallToActionProps) => {
  const FlagDis = () => {
    return (
      <FlagBg>
        <FlagCenter />
      </FlagBg>
    );
  };

  const WriteDis = () => {
    return (
      <HiraganaCall>
        <HiraganaTag>ひらがな</HiraganaTag>
        <HiraganaTag>カタカナ</HiraganaTag>
        <HiraganaTag>漢字</HiraganaTag>
      </HiraganaCall>
    );
  };

  return (
    <CallToActionStyled>
      {flag && <FlagDis />}
      {write && <WriteDis />}
      <StartButton />
    </CallToActionStyled>
  );
};

export default CallToAction;
