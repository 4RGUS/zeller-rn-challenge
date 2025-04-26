import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Roles } from "../graphql/types";
import { RadioCircle } from "./RadioCircle";

type UserTypeButtonsProps = {
  onPress: (role: Roles) => void;
  selectedRole: Roles;
};

export const UserTypeButtons = ({
  onPress,
  selectedRole,
}: UserTypeButtonsProps) => {
  return Object.values(Roles).map((role) => {
    const isSelected = selectedRole === role;
    const backgroundColor = isSelected ? "#E6F0FF" : "#FFF";
    return (
      <TouchableOpacity
        onPress={() => onPress(role)}
        key={role}
        style={[styles.container, { backgroundColor }]}
      >
        <RadioCircle selected={isSelected} />
        <Text>{role}</Text>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    gap: 12,
  },
  button: {
    marginLeft: 12,
    width: "100%",
  },
});
