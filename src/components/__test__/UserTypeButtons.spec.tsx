import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { UserTypeButtons } from "../UserTypeButtons";
import { Roles } from "../../graphql/types";

describe("UserTypeButtons component", () => {
  const mockOnPress = jest.fn();

  it("renders the correct number of buttons based on roles", () => {
    const { getAllByText } = render(
      <UserTypeButtons onPress={mockOnPress} selectedRole={Roles.ADMIN} />
    );

    expect(getAllByText(/admin|manager/i)).toHaveLength(2);
  });

  it("calls onPress with the correct role when a button is pressed", () => {
    const { getByText } = render(
      <UserTypeButtons onPress={mockOnPress} selectedRole={Roles.MANAGER} />
    );

    fireEvent.press(getByText(Roles.ADMIN));

    expect(mockOnPress).toHaveBeenCalledWith(Roles.ADMIN);
  });

  it("applies the correct background color for the selected role", () => {
    const { getByText, getByTestId } = render(
      <UserTypeButtons onPress={mockOnPress} selectedRole={Roles.MANAGER} />
    );

    const selectedButton = getByTestId("selected-role");
    const unselectedButton = getByTestId("un-selected-role");

    expect(selectedButton).toHaveStyle({ backgroundColor: "#E6F0FF" });

    expect(unselectedButton).toHaveStyle({ backgroundColor: "#FFF" });
  });
});
