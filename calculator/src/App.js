import React, {Component} from 'react'
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native'
import Button from './componentes/Button'
import Display from './componentes/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false, //o display precisa ser limpo? inicialmente nao
  operation: null, // armazena o tipo de operacao solicitada
  values: [0, 0], 
  current: 0,
}

export default class App extends Component {
  // operador spread - pega todos os atributos de initialState e seta dentro do objeto que representa o estado
  // este operador nao utiliza passagem por referencia, utiliza passagem por copia 
  state = { ...initialState }

  addDigit = n => {

    // o display sera limp quando estiver no seu estado inciial - valor zero
    //ou quando a variavel de limpar display for verdadeira - usuario apertar AC
    const clearDisplay = this.state.displayValue === '0'|| this.state.clearDisplay
   
    // se ja estiver incluido um ponto no valor do display, nao poderá haver houtro
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }

    // o valor é vazio quando o display é limpo
    const currentValue = clearDisplay ? '' : this.state.displayValue
    //valor atual mostrado no display - valor corrente mais o valor
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } 
    else {
      // console.warn(this.state.operation)
      const equals = operation === '='
      const values = [...this.state.values] //copia do array
      if(this.state.operation === '+'){
        values[0] = values[0] + values[1]
      }
      else if(this.state.operation === '-'){
        values[0] = values[0] - values[1]
      }
      else if(this.state.operation === '*'){
        values[0] = values[0] * values[1]
      }
      else if(this.state.operation === '/'){
        values[0] = values[0] / values[1]
      }
      else if(this.state.operation === '+/-'){
        values[0] = values[0] * (-1)
      }
      else if(this.state.operation === '%'){
        values[0] = values[0] / 100
      }

      //setando nova operacao
      values[1] = 0

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display value={this.state.displayValue} />
        <SafeAreaView style={styles.buttons}>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            <Button label='AC' operation onClick={this.clearMemory} />
            <Button label='+/-' operation onClick={this.setOperation} />
            <Button label='%' operation onClick={this.setOperation} />
            <Button label='/' operation onClick={this.setOperation} />
          </View>
            
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            <Button label='7' onClick={this.addDigit} />
            <Button label='8' onClick={this.addDigit} />
            <Button label='9' onClick={this.addDigit} />
            <Button label='*' operation  onClick={this.setOperation} />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            <Button label='4' onClick={this.addDigit} />
            <Button label='5' onClick={this.addDigit} />
            <Button label='6' onClick={this.addDigit} />
            <Button label='-' operation onClick={this.setOperation} /> 
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            <Button label='1' onClick={this.addDigit} />
            <Button label='2' onClick={this.addDigit} />
            <Button label='3' onClick={this.addDigit} />
            <Button label='+' operation onClick={this.setOperation} />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            <Button label='0' double  onClick={this.addDigit} />
            <Button label='.' onClick={this.addDigit} />
            <Button label='=' operation onClick={this.setOperation} />
          </View>

        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end"
  },
  buttons: {
    justifyContent: 'space-evenly',
  }
});