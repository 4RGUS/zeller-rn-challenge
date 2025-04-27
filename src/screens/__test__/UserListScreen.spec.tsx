import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { MockedProvider } from "@apollo/react-testing";
import { LIST_ZELLER_CUSTOMERS } from "../../graphql/queries";
import { Roles } from "../../graphql/types";
import UserListScreen from "../UserListScreen";

const mockData = {
  listZellerCustomers: {
    items: [
      { id: "1", name: "John Doe", role: "Admin" },
      { id: "2", name: "Jane Doe", role: "Manager" },
    ],
  },
};

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: { filter: { role: { eq: Roles.ADMIN } } },
    },
    result: { data: mockData },
  },
];

describe("UserListScreen component", () => {
  it("should render loading state initially", () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeTruthy();
  });

  it("should render error message if there is an error", async () => {
    const errorMocks = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS,
          variables: { filter: { role: { eq: Roles.ADMIN } } },
        },
        error: new Error("An error occurred"),
        delay: 0,
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    expect(await screen.findByText(/Error: An error occurred/i)).toBeTruthy();
  });

  it("should display data correctly when fetched successfully", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText("John Doe")).toBeTruthy();
      expect(getByText("Jane Doe")).toBeTruthy();
    });
  });

  it("should handle role selection and refetch data", async () => {
    const useQueryMock = jest.spyOn(require("@apollo/client"), "useQuery");
    const refetchMock = jest.fn();
    useQueryMock.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: refetchMock,
    });
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserListScreen />
      </MockedProvider>
    );

    expect(getByTestId("selected-role")).toBeTruthy();

    fireEvent.press(getByTestId("un-selected-role"));

    expect(refetchMock).toHaveBeenCalledTimes(1);
    expect(refetchMock).toHaveBeenCalledWith({
      filter: { role: { eq: Roles.MANAGER } },
    });
  });
});
