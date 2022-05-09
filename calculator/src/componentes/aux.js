import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Button from "./componentes/Button";
import Display from "./componentes/Display";
import Calculator, { initialState } from "./componentes/Calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    // eixo principal (eixo Y - vertical) - logo, alinhamos todos elementos ao final da tela
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export default class App extends React.Component {

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


  handleTap = (type, value) => {
    this.setState(state => Calculator(type, value, state));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.currentValue} />
        <SafeAreaView>
        <View style={{ flexDirection: "row" }}>
            <Button text="AC" theme="secondary" operation onClick={this.clearMemory} />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Button text="7" onPress={() => this.handleTap("digit", 7)} />
            <Button text="8" onPress={() => this.handleTap("digit", 8)} />
            <Button text="9" onPress={() => this.handleTap("digit", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Button text="4" onPress={() => this.handleTap("digit", 4)} />
            <Button text="5" onPress={() => this.handleTap("digit", 5)} />
            <Button text="6" onPress={() => this.handleTap("digit", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Button text="1" onPress={() => this.handleTap("digit", 1)} />
            <Button text="2" onPress={() => this.handleTap("digit", 2)} />
            <Button text="3" onPress={() => this.handleTap("digit", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("digit", 0)}
            />
            <Button text="." onPress={() => this.handleTap("digit", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </View>
          
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}