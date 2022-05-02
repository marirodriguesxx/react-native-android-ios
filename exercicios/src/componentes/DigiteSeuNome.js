import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome,setNome] = useState('Teste')
    return(
        <View style={Estilo.grande}>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite seu Nome"
                //nao eh possivel, a partir da interface grafica, alterar o componente!
                value={nome} //componente controlado! - o componente so é alterado mediante alteracao no estado
                // value={null} //componente nao controlado
                //nesse caso, o setnome esta aletrando o estado do objeto
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}