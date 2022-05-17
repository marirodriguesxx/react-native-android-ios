import React from 'react' //sempre que usar jsxx
import { SafeAreaView,Text } from 'react-native'

export default props => {

    function decimalToHexadecimal (decimal) {
        let numero = decimal
        let resto = 0
        let resp = ""
        // enquanto o quociente da divisao nao for 1
        while (numero != 0){
            resto = parseInt(numero%16)
            numero = parseInt(numero/16)
            // console.warn("numero:", numero, " - resto:",resto )
            if( resto === 10 ){
                resp = "A" + resp
            } else if( resto === 11 ){
                resp = "B" + resp
            } else if( resto === 12 ){
                resp = "C" + resp
            } else if( resto === 13 ){
                resp = "D" + resp
            } else if( resto === 14 ){
                resp = "E" + resp
            } else if( resto === 15 ){
                resp = "F" + resp
            } else {
                resp = resto.toString() + resp
            }
        }
        return resp
    }

    function decimalToBinario (decimal) {
        let numero = decimal
        let resto = 0
        let resp = ""
        // enquanto o quociente da divisao nao for 1
        while (numero != 0){
            resto = parseInt(numero%2)
            numero = parseInt(numero/2)
            resp = resto.toString() + resp
        }
        return resp
    }

    return (
        <SafeAreaView>
            <Text> Conversor </Text>
            <Text> {decimalToBinario(props.decimal)} </Text>
            <Text> {decimalToHexadecimal(props.decimal)} </Text>
        </SafeAreaView>
    )
}


