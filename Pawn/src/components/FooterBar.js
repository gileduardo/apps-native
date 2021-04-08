import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class FooterBar extends React.Component {

  render() {
    return (
       <View style={styles.main}>
        <View>
          <TouchableOpacity onPress={ () => { this.props.onPress({screen: 0, title: 'Partida'}) } }>
            <Image
              source={ require('../img/game_ico.png') }
              style={{ width: 56, height: 56 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ () => { this.props.onPress({screen: 1, title: 'Regras'}) } }>
            <Image
              source={ require('../img/rules_ico.png') }
              style={{ width: 56, height: 56 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ () => { this.props.onPress({screen: 2, title: 'Estatísticas'}) } }>
            <Image
              source={ require('../img/statistic_ico.png') }
              style={{ width: 56, height: 56 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={ () => { this.props.onPress({screen: 3, title: 'Configurações'}) } }>
            <Image
              source={ require('../img/config_ico.png') }
              style={{ width: 56, height: 56 }}
            />
          </TouchableOpacity>
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 1,
    borderColor: '#000000',
    borderTopWidth: 3,
  }
});