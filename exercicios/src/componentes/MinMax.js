import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    //o valor de props eh um obj  
    return (
    <Text style = {Estilo.grande}>
        O valor {props.max} é maior que o valor {props.max} 
    </Text>
)}