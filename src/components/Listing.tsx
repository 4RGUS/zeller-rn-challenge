import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Roles, ZellerCustomer } from '../graphql/types';
import { mockZellerUsers } from '../mocks/users';

type ListingProps = {
    data: ZellerCustomer[],
    roleType: Roles
}

export const Listing = (props: ListingProps) => {
    const { data, roleType } = props
    const mockedData = mockZellerUsers.filter((value) => value.role === roleType)
    return (
        <FlatList
            data={data.length > 0 ? data : mockedData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={style.container}>
                    <View style={style.initialsBox}>
                        <Text style={style.nameInitialTextStyle}>{item.name?.[0]}</Text>
                    </View>
                    <View
                        style={style.nameContainer}
                    >
                        <Text style={style.nameTextStyle}>{item.name}</Text>
                        <Text style={style.roleTextStyle}>{item.role}</Text>
                    </View>
                </View>
            )}
        />
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        gap: 12,
        alignItems: "center",
        paddingLeft: 0,
    },
    initialsBox: {
        height: 45,
        width: 45,
        borderRadius: 5,
        backgroundColor: "#E6F0FF",
        justifyContent: "center",
        alignItems: "center"
    },
    nameContainer: {
        width: "100%",
    },
    nameInitialTextStyle: {
        fontSize: 18,
        color: "#4D94FF"
    },
    nameTextStyle: {
        fontWeight: "bold",
    },
    roleTextStyle: {
        color: "#A9A9A9"
    }
})