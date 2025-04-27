import React from "react";
import { render } from "@testing-library/react-native";
import { RadioCircle } from "../RadioCircle";

describe("RadioCircle component", () => {
  it("should render outer circle when not selected", () => {
    const { getByTestId, queryByTestId } = render(
      <RadioCircle selected={false} />
    );

    const outerCircle = getByTestId("outer-circle");
    expect(outerCircle).toBeTruthy();

    const innerCircle = queryByTestId("inner-circle");
    expect(innerCircle).toBeNull();
  });

  it("should render both outer and inner circles when selected", () => {
    const { getByTestId } = render(<RadioCircle selected={true} />);

    const outerCircle = getByTestId("outer-circle");
    expect(outerCircle).toBeTruthy();

    const innerCircle = getByTestId("inner-circle");
    expect(innerCircle).toBeTruthy();
  });
});
