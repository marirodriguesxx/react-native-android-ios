import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from './params';

export default class App extends Component{
  render(){
    return (
      <SafeAreaView style = {styles.container}> 
        <Text style = {styles.welcome}> Iniciando o Mines !</Text>
        <Text style = {styles.welcome}>
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

