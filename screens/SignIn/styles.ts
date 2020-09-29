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
