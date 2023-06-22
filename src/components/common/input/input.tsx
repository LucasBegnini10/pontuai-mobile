import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Helper,
  InputContainer,
  Label,
  MyInput,
  ViewIcon,
} from "./input.style";
import { useState } from "react";
import { InputProps } from "./input.type";

export default function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <Container>
      <Label>{props.label}</Label>
      <InputContainer isFocused={isFocused}>
        <MyInput
          testID="input"
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={handleBlur}
          onFocus={handleFocus}
          editable={props.editable}
          secureTextEntry={props.secureTextEntry}
          ref={props.ref}
          inputMode={props.inputMode}
        />
        {props.iconElement ? props.iconElement : null}
      </InputContainer>
      <Helper>{props.helperText}</Helper>
    </Container>
  );
}
