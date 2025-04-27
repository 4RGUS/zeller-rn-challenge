import React, { useCallback, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { LIST_ZELLER_CUSTOMERS } from "../graphql/queries";
import { Listing } from "../components/Listing";
import { Roles } from "../graphql/types";
import { UserTypeButtons } from "../components/UserTypeButtons";

const UserListScreen = () => {
  const [selectedRole, setSelectedRole] = useState(Roles.ADMIN);

  const { data, loading, error, refetch } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {
      filter: {
        role: {
          eq: selectedRole,
        },
      },
    },
  });

  const onPressHandle = useCallback(
    (role: Roles) => {
      setSelectedRole(role);
      refetch({
        filter: {
          role: {
            eq: role,
          },
        },
      });
    },
    [setSelectedRole, refetch]
  );

  if (loading)
    return (
      <ActivityIndicator testID="loading-spinner" size="large" color="#000" />
    );

  return (
    <View style={styles.container}>
      <Text style={styles.userTypeTextStyle}>User Types</Text>
      <UserTypeButtons onPress={onPressHandle} selectedRole={selectedRole} />

      <Text style={styles.selectedRoleHeaderText}>{selectedRole} Users</Text>

      <View style={styles.userListContainer}>
        {data ? <Listing data={data?.listZellerCustomers.items} /> : null}
        {error ? (
          <Text testID="error-message">Error: {error.message}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: "#FFFFFF" },
  userTypeTextStyle: {
    fontSize: 20,
    marginBottom: 16,
  },
  selectedRoleHeaderText: {
    fontSize: 20,
    marginVertical: 16,
  },
  userListContainer: {
    flex: 1,
  },
});
