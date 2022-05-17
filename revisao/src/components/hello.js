import React from 'react' //sempre que usar jsxx
import { SafeAreaView,Text } from 'react-native'

export default props => {

    function toBinario (decimal) {
        let numero = decimal
        let resto
        let resp = ""
        console.warn("numero antes:", numero)
        // enquanto o quociente da divisao nao for 1
        while (numero != 1){
            resto = parseInt(numero%2)
            numero = parseInt(numero/2)
            resp = resto.toString() + resp
            console.warn("numero:", numero, "resto:", resto)
        }
        resp = "1" + resp
        return resp
    }

    return (
        <SafeAreaView>
            <Text> hello world :) </Text>
            <Text> {props.decimal} </Text>
            <Text> {toBinario(props.decimal)} </Text>
        </SafeAreaView>
    )
}


