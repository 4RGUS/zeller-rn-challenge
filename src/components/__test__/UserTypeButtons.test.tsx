import React from "react";
import { render } from "@testing-library/react-native";
import { UserTypeButtons } from "../UserTypeButtons";
import { Roles } from "../../graphql/types";

describe("UserTypeButtons component", () => {
  it("matches snapshot when Admin role is selected", () => {
    const { toJSON } = render(
      <UserTypeButtons onPress={jest.fn()} selectedRole={Roles.ADMIN} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("matches snapshot when Manager role is selected", () => {
    const { toJSON } = render(
      <UserTypeButtons onPress={jest.fn()} selectedRole={Roles.MANAGER} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
