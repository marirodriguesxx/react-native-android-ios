import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

// export default ({num = 0}) => {
//     if(num % 2 ===0){
//         return(
//             <View>
//                 <Text style={Estilo.grande}> O resultado é:</Text>
//                 <Text style={Estilo.grande}>
//                     Par
//                 </Text>
//             </View>
//         )
//     }
//     else{
//         return(
//             <View>
//                 <Text style={Estilo.grande}> O resultado é:</Text>
//                 <Text style={Estilo.grande}>
//                     Impar
//                 </Text>
//             </View>
//         )
//     }
// }

//renderizacao condicional usando operador ternario :)
export default ({num = 0}) => {
    return(
        <View>
            <Text style={Estilo.grande}> O resultado é: </Text>
            {num % 2 ===0
                ? <Text style={Estilo.grande}> Par </Text> 
                : <Text style={Estilo.grande}> ímpar </Text> 
            }
        </View>
    )
}