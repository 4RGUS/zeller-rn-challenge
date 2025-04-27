import { gql } from "@apollo/client";

export const LIST_ZELLER_CUSTOMERS = gql`
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;

export const SEARCH_ZELLER_CUSTOMERS = gql`
  query SearchZellerCustomers(
    $nameFilter: TableStringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(
      filter: { name: $nameFilter }
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;
