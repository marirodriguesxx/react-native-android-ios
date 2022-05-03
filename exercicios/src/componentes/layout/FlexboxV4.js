import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: { //flex contaiener :)
        width: 100,
        flexGrow: 1,
        backgroundColor: '#000'
    },
    V0: {
        height: 300,
        backgroundColor: '#36c9a7' 
    },
    V1: {
        flexGrow: 5,
        backgroundColor: '#ff801a'
    },
    V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1'
    }
})

//area sobrando : somatorio de flexgrow e atribuicao proporcional aos elementos com flexgrow da tela :)
