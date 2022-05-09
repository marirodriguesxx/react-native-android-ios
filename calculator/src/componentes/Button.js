import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    button: {
        color: 'black',
        fontSize: 30,
        borderRadius: 40,
        height: Math.floor(buttonWidth - 10),
        width: Math.floor(buttonWidth - 10),
        padding: 20,
        // nesse caso, esta sendo usada apenas porque nao ha propriedades de shadow
        //caso houvesse, deveria ser investigada outra forma de resolver o backgroundcolor alem dos limites do raio da circunferencia no IOS
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        
    },
    operationButton: {
        color: 'black',
        backgroundColor: '#FFF8DC',
    },
    buttonDouble: {
        color: 'black',
        width: screen.width / 2 - 10,
        backgroundColor: '#f0f0f0',
        paddingLeft: 50,
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