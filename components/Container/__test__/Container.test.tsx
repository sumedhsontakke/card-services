import React from "react";
import { render } from "@testing-library/react-native";
import Container from "../../Container";
import { Text } from "react-native";


describe("Container component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Container>
        <Text>Test Child</Text>
      </Container>
    );

    expect(getByText("Test Child")).toBeTruthy();
  });

  it("applies customStyles correctly", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <Container customStyles={customStyle}>
        <Text>Child</Text>
      </Container>
    );

    const container = getByTestId("container");
    expect(container.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)])
    );
  });
});
