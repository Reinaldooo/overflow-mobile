import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 20px;
  background-color: #025aa2;
  align-items: center;
  justify-content: center;
`;

export const SignInBack = styled.Image``;

export const Title = styled.Text`
  margin: 50px 0 30px;
  font-family: "Kumbh-bold";
  font-size: 20px;
  color: #fff;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Kumbh-bold";
`;

export const BackToLogin = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 0;
  border-top-color: #076abb;
  border-top-width: 1px;
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToLoginText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Kumbh-bold";
  margin-left: 10px;
`;
