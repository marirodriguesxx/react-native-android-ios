import React from 'react' //sempre que usar jsxx
import { SafeAreaView,Text } from 'react-native'
import { decimalToBinario, decimalToHexadecimal } from '../functions/Functios'
import styles from '../styles/styles'

export default props => {
    return (
        <SafeAreaView>
            <Text style = {styles.title}> Conversor da Mari </Text>
            <Text> {decimalToBinario(props.decimal)} </Text>
            <Text> {decimalToHexadecimal(props.decimal)} </Text>
        </SafeAreaView>
    )
}


