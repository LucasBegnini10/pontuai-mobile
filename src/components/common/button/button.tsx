import React from "react";
import { Loader, MyButton, TextButton } from "./style";
import { PropsButton } from "./button.";

export default function Button(props: PropsButton) {
  return (
    <MyButton {...props} onPress={props.onClick}>
      {props.isLoading ? <Loader /> : <TextButton {...props}>Teste</TextButton>}
    </MyButton>
  );
}
