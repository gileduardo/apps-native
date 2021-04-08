import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class FooterBar extends React.Component {

  render() {
    return (
       <View style={styles.main}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={ () => { } }>
            <Image
              source={ require('../img/maps.png') }
              style={{ width: 72, height: 72 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={ () => { } }>
            <Image
              source={ require('../img/graph.png') }
              style={{ width: 72, height: 72 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={ () => { } }>
            <Image
              source={ require('../img/truck.png') }
              style={{ width: 84, height: 84 }}
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
    backgroundColor: '#E8E8E7',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 45,
    borderTopColor: '#B3AEAE',
    shadowOpacity: 1, 
    shadowColor: 'black', 
    shadowOffset: {
            width: 0,
            height: -10
    },
    elevation: 10,
  }
});