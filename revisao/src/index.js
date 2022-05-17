import React from 'react'
import { SafeAreaView } from 'react-native'
import Conversor from './components/Conversor' //fora do par de chaver pois hello usou export default

export default () => (
    <SafeAreaView>
        <Conversor decimal = {30}/>
    </SafeAreaView>
)
