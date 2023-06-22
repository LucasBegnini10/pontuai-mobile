import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "./input";
import renderer from "react-test-renderer";

const defaultProps = {
  label: "Username",
  value: "",
  onChangeText: () => null,
  onBlur: () => null,
  onFocus: () => null,
  editable: true,
  secureTextEntry: false,
  helperText: "Helper",
};

describe("<Input />", () => {
  it("renders the label correctly", () => {
    const { getByText } = render(<Input {...defaultProps} />);
    const labelElement = getByText("Username");
    expect(labelElement).toBeTruthy();
  });

  it("renders the helperText correctly", () => {
    const { getByText } = render(<Input {...defaultProps} />);
    const labelElement = getByText("Helper");
    expect(labelElement).toBeTruthy();
  });

  it("renders the input field correctly", () => {
    const { getByTestId } = render(<Input {...defaultProps} />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeTruthy();
  });

  it("calls the onChangeText function when the input value changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <Input {...defaultProps} onChangeText={onChangeTextMock} />
    );
    const inputElement = getByTestId("input");
    fireEvent.changeText(inputElement, "test");
    expect(onChangeTextMock).toHaveBeenCalledWith("test");
  });
});
