//desafio: receber um numero min e max e gerar um aleatorio nesse intervalo
import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

function rand(min, max) { 
    return parseInt(Math.random() * (max - min) + min);
  }

// export default ({props}) => {
//     console.warn(props)
//     return (
//     <Text style = {Estilo.grande}>
//         O valor aleatorio gerado foi: {rand(props.min, props.max)}
//     </Text>
// )} 

//utilizando destruction
// export default ({min,max}) => {
//     return (
//     <Text style = {Estilo.grande}>
//         O valor aleatorio gerado foi: {rand(min, max)}
//     </Text>
// )} 
 
//nos dois casos acima, as variaveis sao facilmente modificaveis!
//o ideal seria criar uma auxiliar para elas dentro da funcao

export default (props) => {
    const {min, max} = props
    return (
    <Text style = {Estilo.grande}>
        O valor aleatorio gerado foi: {rand(min, max)}
    </Text>
)} 