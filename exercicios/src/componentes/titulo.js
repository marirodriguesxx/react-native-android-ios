 import React, { Fragment } from 'react'
 import { SafeAreaView, Text } from 'react-native'
 import Estilo from './estilo'

//NOS DOIS CASOS ABAIXO RETORNAMOS UMA UI VIEW
//  export default props => {
//     return (
//         <SafeAreaView>
//             <Text style={Estilo.grande}>
//                 {props.principal}
//             </Text>
//             <Text >
//                 {props.secundario}
//             </Text>
//         </SafeAreaView>
//     )
//  }

//sem o return 
// export default props => (
//     <SafeAreaView>
//         <Text style={Estilo.grande}>
//             {props.principal}
//         </Text>
//         <Text >
//             {props.secundario}
//         </Text>
//     </SafeAreaView>
// )

//NESTE CASO RETORNAMOS O PROPRIO TEXTO
//utilizando react fragment
export default props => (
   <Fragment>
        <Text style={Estilo.grande}>
            {props.principal}
        </Text>
        <Text >
            {props.secundario}
        </Text>
    </Fragment>
 )