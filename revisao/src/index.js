import React from 'react'
import { SafeAreaView } from 'react-native'
import Hello from './components/hello' //fora do par de chaver pois hello usou export default

export default () => (
    <SafeAreaView>
        <Hello decimal = {18}/>
    </SafeAreaView>
)
