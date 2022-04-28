import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

// export default function Comp() {
//     return <Text>Comp #Oficial</Text>
// }

// export function Comp1() {
//     return <Text>Comp #01</Text>
// }

// export function Comp2() {
//     return <Text>Comp #02</Text>
// }

//ou

function Comp() {
    return <Text style={Estilo.grande}>Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Estilo.grande}>Comp #01</Text>
}

function Comp2() {
    return <Text style={Estilo.grande}>Comp #02</Text>
}

export { Comp1, Comp2 }
export default Comp