import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

//componente baseado em funcao (comp funcional)
export default props => {

    const { mined, opened, nearMines, exploded, flagged } = props

    //vetor de estilos 
    const styleField = [styles.field] //estilo padrao
    if(opened) styleField.push(styles.opened)

    if(exploded) styleField.push(styles.exploded)
    
    //se estiver marcado com a bandeira
    if(flagged) styleField.push(styles.flagged)

    //se tiver apenas um estilo, ele sera o estilo regular
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null //representa o perigo - quantidade de minas proximas!
    if (nearMines > 0){
        if (nearMines ==1) color = '#2A2BD7'
        if (nearMines ==2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >=6) color = '##F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, {color: color}]}>
                    {nearMines}
                </Text> : false}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag />: false}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#999", 
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})