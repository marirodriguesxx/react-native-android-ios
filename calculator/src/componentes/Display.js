import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderColor: 'white',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3
    },
    displayValue: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}>
            {props.value}
        </Text>
    </View>