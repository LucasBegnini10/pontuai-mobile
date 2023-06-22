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
import { TouchableOpacity } from "react-native";

export default function Input() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Container>
      <Label>Preencha seu e-mail</Label>
      <InputContainer isFocused={isFocused}>
        <MyInput onBlur={handleBlur} onFocus={handleFocus} />
        <ViewIcon>
          <TouchableOpacity>
            <AntDesign name="eye" size={24} color="black" />
          </TouchableOpacity>
        </ViewIcon>
      </InputContainer>
      <Helper>Seu e-mail deve conter 30 caracteres</Helper>
    </Container>
  );
}
