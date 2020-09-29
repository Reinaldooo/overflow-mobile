import React from "react";
//
import signInBack from "../../assets/signInBack.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.SignInBack source={signInBack} />
      <S.Title>Faça seu login</S.Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="passwd" icon="lock" placeholder="Senha" />
      <Button>Entrar</Button>
    </S.Container>
  );
};

export default SignIn;
