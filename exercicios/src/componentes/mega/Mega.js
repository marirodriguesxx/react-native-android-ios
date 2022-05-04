import React from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../estilo'
import Estilo from '../estilo'


//inheritance
export default class Mega extends React.Component {

    state = {
        qtd : this.props.qtd
    }

    // é chamada a partir da digitacao do campo na interface
    //
    alterarQtdNum(nqtd) {
        //sempre, para alterar o estado de um componente, usamos o setState 
        this.setState({ qtd: nqtd})
    }

    // constructor(props) {
    //     super(props)

    //     //bind passando o this significa que toda vez que o this for chamado dentro da func
    //     //ele vai apontar para o mesmo this passado como parametro
    //     this.alterarQtdNum = this.alterarQtdNum.bind(this)
    // }

    render() {
        return (
            <>
                <Text style={Estilo.grande}> 
                    Gerador de Mega-Sena 
                    {this.state.qtd}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder= "qtd de numeros"
                    value={this.state.qtd}
                    // onChangeText={this.alterarQtdNum}
                    onChangeText={qtde => this.alterarQtdNum(qtde)}
                />
            </>
        )
    }
}