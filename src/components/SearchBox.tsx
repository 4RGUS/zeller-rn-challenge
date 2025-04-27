import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type SearchBoxProps = {
  onSearchPress: (text: string) => void;
};

const SearchBox = ({ onSearchPress }: SearchBoxProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearchPress(searchText);
    console.log("Search for:", searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search by name"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    padding: 0,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default SearchBox;
