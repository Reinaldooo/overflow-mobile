import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #999;
  font-family: "Kumbh-bold";
  font-size: 16px;
`;
