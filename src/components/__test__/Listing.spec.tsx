import React from "react";
import { render } from "@testing-library/react-native";
import { Roles, ZellerCustomer } from "../../graphql/types";
import { Listing } from "../Listing";

describe("Listing Component", () => {
  const sampleData: ZellerCustomer[] = [
    { id: "1", name: "Alice", role: Roles.ADMIN },
    { id: "2", name: "Bob", role: Roles.MANAGER },
  ];

  it("renders list using provided data", () => {
    const { getByText } = render(
      <Listing data={sampleData} roleType={Roles.ADMIN} />
    );

    expect(getByText("Alice")).toBeTruthy();
    expect(getByText("Bob")).toBeTruthy();
    expect(getByText(Roles.ADMIN)).toBeTruthy();
  });

  it("displays correct initials in initials box", () => {
    const { getByText } = render(
      <Listing data={sampleData} roleType={Roles.ADMIN} />
    );

    expect(getByText("A")).toBeTruthy();
    expect(getByText("B")).toBeTruthy();
  });
});
