
import React from 'react';
import { StyleSheet, View, Button, ScrollView, Alert } from 'react-native';

import Header from './src/components/Header';
import ButMatrix from './src/components/ButMatrix';
import NumberPanel from './src/components/NumberPanel';

export default class App extends React.Component {
  
  constructor(props) {
    
    super(props);

    this.state = {
      cont: 0,
      rows: 10,
      cols: 6,
      sel_numbers: ["00", "00", "00", "00", "00", "00"],
      meg_numbers: ["00", "00", "00", "00", "00", "00"],
    };
  }

  componentDidMount() {
    
  }

  onPress(val) {

    const { num, sel } = val;
    let total = this.state.cont;
    let copy = this.state.sel_numbers;

    // Selecionou um novo número
    if(sel == 1) {
      for(let a=0; a < copy.length; a++) {
        if(copy[a] == "00") {
          copy[a] = num;
          a = copy.length;
          total++;
        }
      }
    }
    // Removeu um número já selecionado
    else {
      for(let a=0; a < copy.length; a++) {
        if(copy[a] == num) {
          copy[a] = "00";
          a = copy.length;
          total--;
        }
      }
    }

    copy.sort(function(a, b) { return a - b });

    this.setState({
      cont: total,
      sel_numbers: copy,
    });
  }

  raffle() {

    if(this.state.cont == 6) {

      let meg_n = [0, 0, 0, 0, 0, 0];
      let nr_acertos = 0;
      let msg='';

      for(let a=0; a < this.state.meg_numbers.length; a++) {
        let n = (this.state.rows * this.state.cols);
        meg_n[a] = Math.floor(Math.random() * n) + 1;

        // Verifica números repetidos
        for(let b=0; b < a; b++) {
          if(meg_n[a] == meg_n[b]) {
            meg_n[a] = Math.floor(Math.random() * n) + 1;
            b = -1;
          }
        }

        // Verifica o número de acertos
        for(let c=0; c < 6; c++) {
          if(meg_n[a] == this.state.sel_numbers[c]) 
            nr_acertos++;
        } 
      }

      meg_n.sort(function(a, b) { return a - b });

      this.setState({
        meg_numbers: meg_n,
      });

      // Apresenta Resultado
      if(nr_acertos == 0) {
        msg = 'Não foi dessa vez, você não acertou sequer um número!';  
      }
      else if(nr_acertos < 4) {
        msg ='Não foi dessa vez, você acertou apenas [' + nr_acertos + '] número(s)!';
      }
      else if (nr_acertos == 4) {
        msg ='Parabéns, você fez uma QUADRA!';
      }
      else if (nr_acertos == 5) {
       msg ='Parabéns, você fez uma QUINA!';
      }
      else {
       msg ='Parabéns, você é o mais novo MILIONÁRIO DA MEGA SENA!';
      }

      Alert.alert(
        'RESULTADO SORTEIO', 
        msg,
        [
          {text: 'OK', onPress: () => { this.finalRaffle() }},
        ],
        { cancelable: false }
      );
    }
    // Ainfa não selecionou 6 números
    else {
      Alert.alert('NÃO REALIZADO', 'Por favor, selecione 6 números antes de efetuar o sorteio!');      
    }
  }

  finalRaffle() {

    this.child.loadMatrix(1);

    this.setState({
      cont: 0,
      realod: 1,
      sel_numbers: ["00", "00", "00", "00", "00", "00"],
      meg_numbers: ["00", "00", "00", "00", "00", "00"],
    });
  }

  render() {
    return (
      <ScrollView style={styles.main}>

        <Header />        

        <ButMatrix
          rows = { this.state.rows }
          cols = { this.state.cols }
          sel_max = '6'
          color = '#208036'
          sel_color = '#C89827'
          onPress = { (val) => this.onPress(val) }
          onRef = { (ref) => (this.child = ref) }
        />

        <NumberPanel numbers={ this.state.sel_numbers }/>

        <View style={ { margin: 4 } }>
          <Button title="Sortear" color='#208036' onPress={ () => this.raffle() }/>
        </View>

        <NumberPanel numbers={ this.state.meg_numbers } />

      </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({

  main: {
    backgroundColor: '#FFF',
  },
});

// https://expo.io/artifacts/fc51a172-765f-42af-ba12-70afbf59c7b6
