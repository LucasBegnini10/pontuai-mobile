import React from "react";
import { Loader, MyButton, TextButton } from "./button.style";
import { PropsButton } from "./button.type";

export default function Button(props: PropsButton) {
  return (
    <MyButton {...props} onPress={props.onClick} testID="button">
      {props.isLoading ? (
        <Loader {...props} />
      ) : (
        <TextButton {...props}>{props.title}</TextButton>
      )}
    </MyButton>
  );
}
