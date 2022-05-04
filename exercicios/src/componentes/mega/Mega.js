import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Estilo from '../estilo'


//inheritance
export default class Mega extends React.Component {

    render() {
        return (
            <Text style={Estilo.grande}> 
                Gerador de Mega-Sena 
                {this.props.qtd}
            </Text>
        )
    }
}