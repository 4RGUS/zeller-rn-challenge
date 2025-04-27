export interface TableStringFilterInput {
  ne?: string;
  eq?: string;
  le?: string;
  lt?: string;
  ge?: string;
  gt?: string;
  contains?: string;
  notContains?: string;
  between?: string[];
  beginsWith?: string;
}

export interface TableZellerCustomerFilterInput {
  id?: TableStringFilterInput;
  name?: TableStringFilterInput;
  email?: TableStringFilterInput;
  role?: TableStringFilterInput;
}

export interface ZellerCustomer {
  id: string;
  name?: string;
  email?: string;
  role?: string;
}

export interface ZellerCustomerConnection {
  items?: ZellerCustomer[];
  nextToken?: string;
}

export interface ListZellerCustomersQueryVariables {
  filter?: TableZellerCustomerFilterInput;
  limit?: number;
  nextToken?: string;
}

export interface ListZellerCustomersQuery {
  listZellerCustomers?: ZellerCustomerConnection;
}

export interface GetZellerCustomerQueryVariables {
  id: string;
}

export interface GetZellerCustomerQuery {
  getZellerCustomer?: ZellerCustomer;
}

export enum Roles {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}
