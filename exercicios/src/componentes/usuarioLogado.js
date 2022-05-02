import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import If from './if'


//atribuimos um objeto vazio para os casos em que o usuario estiver nulo
// Object.keys(usuario) retorna um array 
export default props => {
    const usuario = props.usuario || {}
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.grande}> Usuário Logado: </Text>
                <Text style={Estilo.grande}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}