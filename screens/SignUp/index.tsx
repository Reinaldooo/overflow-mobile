import React from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
//
import signInBack from "../../assets/signInBack.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <S.Container>
        <S.SignInBack source={signInBack} />
        <View>
          {/* This viw is just here to make it possible to animate the text rise
          when the keyboard is enabled */}
          <S.Title>Criar conta</S.Title>
        </View>

        <Input name="name" icon="user" placeholder="Seu nome" />
        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="passwd" icon="lock" placeholder="Senha" />
        <Button>Criar</Button>

        <S.BackToLogin>
          <Feather name="log-in" size={20} color="#fff" />
          <S.BackToLoginText onPress={() => navigation.goBack()}>
            Voltar para login
          </S.BackToLoginText>
        </S.BackToLogin>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
