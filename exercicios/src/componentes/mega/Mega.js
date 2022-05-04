import React from 'react'
import { Text, TextInput, Button, flexDirection, View } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './Numero'


//inheritance
export default class Mega extends React.Component {

    state = {
        qtd : this.props.qtd,
        numeros: []
    }

    // é chamada a partir da digitacao do campo na interface
    //
    alterarQtdNum(nqtd) {
        //sempre, para alterar o estado de um componente, usamos o setState 
        this.setState({ qtd: +nqtd})
    }

    rand = numeros => { 
        const ramdom = parseInt(Math.random() * 60 + 1);
        return numeros.includes(ramdom)? this.rand(numeros) : ramdom
    }

    //desafio: 
    gerarNumeros = () => {
        // numeros.forEach(element => {
        //     this.setState({
        //         element: this.rand()
        //     })
        // });
        const numeros = Array(this.state.qtd).fill().reduce((numeros) => [...numeros, this.rand(numeros)], [])
        this.setState({numeros})
    }

    printNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
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
                    value={`${this.state.qtd}`}
                    // onChangeText={this.alterarQtdNum}
                    onChangeText={qtde => this.alterarQtdNum(qtde)}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                {/* <Text>
                    {this.state.numeros.join(', ')}
                </Text> */}
                <View style={{
                    flexDirection: 'row', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center'
                }}>
                    {this.printNumeros()}
                </View>
            </>
        )
    }
}

//sobre o flexwrap --> por pdarao temos o nowrap, ou seja, a linha nao sera quebrada
//quando mudamos o valor da propriedade como feito na linha 75, possibilitamos essa quebra de linha em casos necessarios