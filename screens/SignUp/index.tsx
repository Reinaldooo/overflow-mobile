import React, { useRef } from "react";
import { Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
//
import signInBack from "../../assets/signInBack.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = (data: object) => {
    console.log(data);
  };

  const submitForm = () => {
    formRef.current?.submitForm();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView
        // By using this SV with keyboardShouldPersistTaps set to "handled", it
        // makes the keyboard close if the user clicks away from it
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <S.Container>
          <S.SignInBack source={signInBack} />
          <View>
            {/* This viw is just here to make it possible to animate the text rise
          when the keyboard is enabled */}
            <S.Title>Criar conta</S.Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignUp} style={{ width: "100%" }}>
            <Input
              name="name"
              icon="user"
              placeholder="Seu nome"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => {
                // Check out Input comp to details on this custom focus method
                emailInputRef.current?.focus();
              }}
            />
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              ref={emailInputRef}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                // Check out Input comp to details on this custom focus method
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              name="passwd"
              icon="lock"
              placeholder="Senha"
              ref={passwordInputRef}
              secureTextEntry
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={submitForm}
            />

            <Button onPress={submitForm}>Criar</Button>
          </Form>

          <S.BackToLogin>
            <Feather name="log-in" size={20} color="#fff" />
            <S.BackToLoginText onPress={() => navigation.goBack()}>
              Voltar para login
            </S.BackToLoginText>
          </S.BackToLogin>
        </S.Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
