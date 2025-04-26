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

  if (loading) return <ActivityIndicator size="large" color="#000" />;

  if (error) {
    console.log(JSON.stringify(error));
  }

  if (data) {
    console.log(JSON.stringify(data));
  }

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>User Types</Text>
      <UserTypeButtons onPress={onPressHandle} selectedRole={selectedRole} />

      <Text style={{ fontSize: 20, marginVertical: 16 }}>
        {selectedRole} Users
      </Text>

      <View style={{ flex: 1 }}>
        <Listing
          roleType={selectedRole}
          data={data?.listZellerCustomers.items}
        />
        {error ? <Text>Error: {error.message}</Text> : null}
      </View>
    </View>
  );
};

export default UserListScreen;
