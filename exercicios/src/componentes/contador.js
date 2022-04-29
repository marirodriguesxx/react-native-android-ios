import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './estilo'


//obsevarmos que a funcao de fato altera o valor de numero
//mas esse valor nao eh mostrado atualizado na tela !
// export default props => {
//     let numero = props.inicial

//     const inc = () => {
//         numero ++
//         console.warn(numero)
//     }
//     const dec = () => numero --

//     return (
//         <>
//             <Text style={Estilo.grande}>{numero}</Text>
//             <Button title="+" onPress={inc}/>
//             <Button title="-" onPress={dec}/>
//         </>
//     )
// }

// utilizanso o useState
// export default props => {
// //retorna um numero e uma funcao que vai alterar o numero :p
// const [numero, setNumero] = useState(props.inicial)

// const inc = () => setNumero(numero+props.passo)
// const dec = () => setNumero(numero-props.passo)

// return (
//     <>
//         <Text style={Estilo.grande}>{numero}</Text>
//         <Button title="+" onPress={inc}/>
//         <Button title="-" onPress={dec}/>
//     </>
// )
// }

//utilizando o destructuring
export default ({inicial=0, passo=1}) => {
    //retorna um numero e uma funcao que vai alterar o numero :p
    const [numero, setNumero] = useState(inicial)
    
    const inc = () => setNumero(numero+passo)
    const dec = () => setNumero(numero-passo)
    
    return (
        <>
            <Text style={Estilo.grande}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
    }