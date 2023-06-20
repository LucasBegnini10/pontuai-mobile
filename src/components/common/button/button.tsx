import React from "react";
import { Loader, MyButton, TextButton } from "./button.style";
import { PropsButton } from "./button.type";
import { render } from "@testing-library/react-native";

export default function Button(props: PropsButton) {
  return (
    <MyButton {...props} onPress={props.onClick} testID="button">
      {props.isLoading ? (
        <Loader />
      ) : (
        <TextButton {...props}>{props.title}</TextButton>
      )}
    </MyButton>
  );
}
