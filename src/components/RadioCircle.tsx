import React from 'react'
import { View, StyleSheet } from 'react-native'

type RadioCircleProp = {
    selected: boolean
}

export const RadioCircle = ({ selected }: RadioCircleProp) => {
    return (
        <View style={styles.outerCircle}>
            {selected && <View style={styles.innerCircle} />}
        </View>
    )
}

const styles = StyleSheet.create({
    outerCircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#4D94FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#4D94FF',
    },
});