import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

// function App(){
//     const jsx = <Text>Primeiro Componente</Text>
//     return jsx
// }

/*
const App = function (){
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
}
*/

/*
export default =>{
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
}
*/

/*
export default =>  return <Text>Primeiro Componente</Text>
*/

import MinMax  from './componentes/MinMax'
// import CompPadrao, {Comp1, Comp2} from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'  

export default () => (
    <SafeAreaView style={style.App}>
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94} /> 
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro>
        </Primeiro> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

