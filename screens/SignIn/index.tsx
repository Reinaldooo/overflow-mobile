import React, { useRef } from "react";
import { Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  View,
  Platform,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
//
import signInBack from "../../assets/signInBack.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../context/authContext";

interface SignInForm {
  email: string;
  passwd: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const handleSignIn = async (data: SignInForm): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start with a clean state
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
        passwd: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        passwd: data.passwd,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // This is the way to set error with unform. Each key is the input name and
        // it will be set on the error var coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
        return;
      }
      console.log(err);
      Alert.alert("Ops, algo deu errado!", "Por favor tente novamente.");
    }
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
            <S.Title>Faça seu login</S.Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignIn} style={{ width: "100%" }}>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              name="email"
              icon="mail"
              placeholder="E-mail"
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
              autoCapitalize="words"
              autoCorrect={false}
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={submitForm}
            />
            <Button onPress={submitForm}>Entrar</Button>
          </Form>

          <S.ForgotPassword>
            <S.ForgotPasswordText>Esqueci a senha</S.ForgotPasswordText>
          </S.ForgotPassword>

          <S.CreateAccount onPress={() => navigation.navigate("SignUp")}>
            <Feather name="log-in" size={20} color="#fff" />
            <S.CreateAccountText>Criar conta</S.CreateAccountText>
          </S.CreateAccount>
        </S.Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
