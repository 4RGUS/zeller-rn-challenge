import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  UserList: undefined;
};

export type UserListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserList"
>;
