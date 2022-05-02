import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'

export default props => {

    const produtoRender = ({ item: p }) => {
        return  <Text>
                     {p.id}) {p.nome} - R$ {p.preco}
                </Text>
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`} //recebe o item e retorna sua chave
                renderItem={produtoRender} //recebemos a referencia da funcao
                //o flatlist chamara a funcao para cada um dos elementos 
            />
        </>
    )
}