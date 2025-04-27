import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type CustomButtonProp = {
  onPress: () => void;
};

const CustomButton = ({ onPress }: CustomButtonProp) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Search by User Role</Text>
      <Icon name="chevron-right" size={20} color="#fff" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    marginLeft: "auto",
  },
});

export default CustomButton;
