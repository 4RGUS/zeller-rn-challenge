import React from "react";
import { render } from "@testing-library/react-native";
import { RadioCircle } from "../RadioCircle";

describe("RadioCircle component", () => {
  it("matches snapshot when not selected", () => {
    const { toJSON } = render(<RadioCircle selected={false} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("matches snapshot when selected", () => {
    const { toJSON } = render(<RadioCircle selected={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
