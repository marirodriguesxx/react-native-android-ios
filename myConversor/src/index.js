import React from 'react'
import { SafeAreaView, TextInput, Text } from 'react-native'
import Conversor from './components/Conversor' //fora do par de chaver pois hello usou export default
import styles from './styles/styles'

export default () => {

    const [decimal, setDecimal] = React.useState("");
    
    return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.title}> Conversor da Mari </Text>
        <TextInput style= {styles.input} 
            placeholder="Digite um número" 
            onSubmitEditing={(value) => setDecimal(value.nativeEvent.text)} />
        <Conversor decimal = {decimal}/>
    </SafeAreaView>
    )
}
