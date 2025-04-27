import React from "react";
import { render } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import UserListScreen from "../UserListScreen"; // adjust path if needed
import { LIST_ZELLER_CUSTOMERS } from "../../graphql/queries";
import { Roles } from "../../graphql/types";

describe("UserListScreen Snapshot", () => {
  it("matches snapshot when loading", () => {
    const { toJSON } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it("matches snapshot with data", async () => {
    const mocks = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS,
          variables: {
            filter: { role: { eq: Roles.ADMIN } },
          },
        },
        result: {
          data: {
            listZellerCustomers: {
              items: [
                { id: "1", name: "John Doe", role: Roles.ADMIN },
                { id: "2", name: "Jane Smith", role: Roles.ADMIN },
              ],
            },
          },
        },
      },
    ];

    const { toJSON, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    await findByText("John Doe");
    expect(toJSON()).toMatchSnapshot();
  });

  it("matches snapshot on error", async () => {
    const errorMocks = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS,
          variables: {
            filter: { role: { eq: Roles.ADMIN } },
          },
        },
        error: new Error("Something went wrong!"),
      },
    ];

    const { toJSON, findByTestId } = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    await findByTestId("error-message");
    expect(toJSON()).toMatchSnapshot();
  });
});
