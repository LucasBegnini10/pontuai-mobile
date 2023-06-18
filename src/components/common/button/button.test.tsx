import React from "react";
import { render } from "@testing-library/react-native";
import Button from "./button";
import renderer from "react-test-renderer";

const defaultProps = {
  onClick: () => null,
  title: "Hello, World!",
};

describe("<Button />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Button {...defaultProps} />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("has render 1 child of type ActivityIndicator", async () => {
    const tree = renderer
      .create(<Button {...defaultProps} isLoading={true} />)
      .toJSON();

    expect(tree.children[0].type).toBe("ActivityIndicator");
  });

  it("has render 1 child of type Text", async () => {
    const tree = renderer
      .create(<Button {...defaultProps} isLoading={false} />)
      .toJSON();

    expect(tree.children[0].type).toBe("Text");
  });

  it("has render 1", async () => {
    const tree = renderer
      .create(<Button {...defaultProps} isLoading={false} />)
      .toJSON();

    expect(tree.children[0].children[0]).toBe("Hello, World!");
  });
});
