import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        //os itens (quadrados) definiram o tamanho do parent (view)
        <View style={style.FlexV1}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        // flexgrow "cresce o componente"
        flexGrow: 1,
        // alinhamento do Main Axis (no caso, da coluna)
        // flex-start -> elementos no inicio
        // flex-start -> elementos no final
        // center -> centralizado
        // space-around -> espaco ao redor de todos os elementos
        // space-evenly -> dividde os espacos de forma uniforme
        // space-btween -> espaco entre todos os elementos
        justifyContent: "space-between",
        backgroundColor: '#000'
    }
})