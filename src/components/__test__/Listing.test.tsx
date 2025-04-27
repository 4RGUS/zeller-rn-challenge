import React from "react";
import { Roles, ZellerCustomer } from "../../graphql/types";
import { render } from "@testing-library/react-native";
import { Listing } from "../Listing";

describe("Listing component", () => {
  const mockData: ZellerCustomer[] = [
    { id: "1", name: "John Doe", role: Roles.ADMIN },
    { id: "2", name: "Jane Smith", role: Roles.MANAGER },
  ];

  it("matches snapshot with provided data", () => {
    const { toJSON } = render(
      <Listing data={mockData} roleType={Roles.ADMIN} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("matches snapshot with empty data (uses mockedData)", () => {
    const { toJSON } = render(<Listing data={[]} roleType={Roles.MANAGER} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
