import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width/ 4,
        width: Dimensions.get('window').width/ 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        // borderRadius: 40,
        borderWidth: 1,
        borderColor: '#888',
        justifyContent: 'space-evenly'
    }
})

// criando o componente em si
export default props => {
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}