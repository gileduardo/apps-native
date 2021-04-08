import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class HeaderBar extends React.Component {

  loadIcon() {

     /* switch(this.props.icon) {
        
        // Disciplinas
        case 1:
            return require('../img/disciplina_ico.png');
            break;

        // Turmas
        case 2:
            return require('../img/turma_ico.png');
            break;

        // Alunos
        case 3:
            return require('../img/aluno_ico.png');
            break;

        // Conceitos
        case 4:
            return require('../img/conceito_ico.png');
            break;    
      }

      return require('../img/home_ico.png');*/
  }

  render() {

    icon = this.loadIcon();

    return (
       <View style={styles.main}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 22, fontWeight: '900', color: '#FFFFFF' }}>{this.props.title}</Text>
          <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>{this.props.subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 5,
    // margin: 2,
  },
});