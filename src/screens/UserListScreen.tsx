import React, { useCallback, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
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
    <View style={{ flex: 1, padding: 30 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>User Types</Text>
      <UserTypeButtons onPress={onPressHandle} selectedRole={selectedRole} />

      <Text style={{ fontSize: 20, marginVertical: 16 }}>
        {selectedRole} Users
      </Text>

      <View style={{ flex: 1 }}>
        {data ? (
          <Listing
            roleType={selectedRole}
            data={data?.listZellerCustomers.items}
          />
        ) : null}
        {error ? (
          <Text testID="error-message">Error: {error.message}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default UserListScreen;
