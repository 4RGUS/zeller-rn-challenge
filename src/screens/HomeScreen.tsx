import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SearchBox from "../components/SearchBox";
import CustomButton from "../components/common/CustomButton";
import { RootStackParamList } from "../types/RootStackParamList";
import { useCustomNavigation } from "../hooks/useCustomNavigation";
import { useQuery } from "@apollo/client";
import { SEARCH_ZELLER_CUSTOMERS } from "../graphql/queries";
import { Listing } from "../components/Listing";

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const { loading, error, data } = useQuery(SEARCH_ZELLER_CUSTOMERS, {
    variables: {
      nameFilter: { contains: searchText },
      limit: 10,
      nextToken: null,
    },
    skip: !searchText,
  });
  const navigation = useCustomNavigation();
  const handleOnSearchPress = (text: string) => {
    setSearchText(text);
  };

  const navigateToUserList = () => {
    navigation.navigate("UserList");
  };

  return (
    <View style={styles.container}>
      <SearchBox onSearchPress={handleOnSearchPress} />
      {data?.listZellerCustomers.items?.length > 0 || loading ? (
        <Listing loading={loading} data={data?.listZellerCustomers.items} />
      ) : (
        <>
          <Text>OR</Text>
          <CustomButton onPress={navigateToUserList} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    gap: 12,
    padding: 20,
  },
});
