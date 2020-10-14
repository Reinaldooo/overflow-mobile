import React, { useRef, useEffect } from "react";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";
//
import * as S from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputRef = useRef<InputValueRef>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, []);

  return (
    <S.Container>
      <S.Icon name={icon} size={20} color="#999" />

      <S.TextInput
        placeholderTextColor="#999"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputRef.current.value = value;
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
