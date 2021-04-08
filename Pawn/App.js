
import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator, Text, View, ScrollView} from 'react-native';

// Components
import FooterBar from './src/components/FooterBar';
import HeaderBar from './src/components/HeaderBar';
// Screens
import Game from './src/screens/Game';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      screen: 0,
      subtitle: "Partida",
      load_menu: 0,
    };
  }

  navigate(data) {

    this.setState({ 
      screen: data.screen,
      subtitle: data.title,
    });
  }

  renderScreen() {

    switch(this.state.screen) {

      // Game
      case 0:
          return ( <Game/> );
          break;

      // Turmas
      /*case 2:
          return ( <Turma/> );
          break;

      // Alunos
      case 3:
          return ( <Aluno/> );
          break;

      // Conceitos
      case 4:
          return ( <Conceito/> );
          break;*/

      default:
          return ( <Game/> );
          break;
    }
  } 

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.top}>
          <HeaderBar 
            title="BATALHA DOS PEÕES"
            subtitle={this.state.subtitle}
            icon={this.state.screen}
            onPress={(data) => { this.navigate(data) }} 
          />
        </View>

        <ScrollView style={styles.center}>
          { this.renderScreen() }
        </ScrollView>

        <View style={styles.footer}>
          <FooterBar 
            onPress={(data) => { this.navigate(data) }} 
          />
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    position: 'absolute', 
    top: 0,
    height: '10%',
    width: '100%',
  },
  center: {
     position: 'absolute', 
     top: '11%',
     height: '75%',
     width: '100%',
     backgroundColor: 'white',
  },
  list: {
    margin: 5,
    marginTop: 10,
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    height: '12%',
    width: '100%',
  }
});
