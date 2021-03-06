import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
//
import * as S from "./styles";

interface ButtonProps extends RectButtonProperties {
  // This interface it's just here to make children mandatory
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
