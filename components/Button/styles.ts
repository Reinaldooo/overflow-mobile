import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #71aeda;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "Kumbh-bold";
  color: #025aa2;
  font-size: 18px;
`;
