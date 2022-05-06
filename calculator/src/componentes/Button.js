import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        borderRadius: 10,
        height: Dimensions.get('window').width / 4 ,
        width: Dimensions.get('window').width / 4 ,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#888',
    },
    operationButton: {
        color: '#000000',
        backgroundColor: '#FFF8DC',
    },
    buttonDouble: {
        backgroundColor: '#f0f0f0',
        width: (Dimensions.get('window').width / 4) * 2,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}