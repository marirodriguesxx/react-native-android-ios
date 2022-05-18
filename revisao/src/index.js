import React from 'react'
import { SafeAreaView } from 'react-native'
import Conversor from './components/Conversor' //fora do par de chaver pois hello usou export default
import styles from './styles/styles'

export default () => {
    return (
    <SafeAreaView style = {styles.container}>
        <Conversor decimal = {30}/>
    </SafeAreaView>
    )
}
