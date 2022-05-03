import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        //os itens (quadrados) definiram o tamanho do parent (view)
        <View style={style.FlexV3}>
            <Quadrado cor='#ff801a' lado={20}/>
            <Quadrado cor='#50d1f6' lado={30}/>
            <Quadrado cor='#dd22c1' lado={40}/>
            <Quadrado cor='#8312ed' lado={50}/>
            <Quadrado cor='#36c9a7' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: { //flex contaiener :)
        //row-reverse muda o lado que comeca a linha
        //colum-rever ˆ
        flexDirection: "row", //muda o eixo de alinhamento central
        //por padrao, no react-native, o eixo da coluna eh o principal
        justifyContent: "space-evenly", //em relacao a linha
        alignItems: "center", //em relacao a coluna
        height: 350,
        width: '100%', 
        backgroundColor: '#000'
    }
})

// qualquer view dentro do react-native usa flexbox para organizar