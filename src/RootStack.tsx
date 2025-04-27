import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "./screens/UserListScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { RootStackParamList } from "./types/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"UserList"} component={UserListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
