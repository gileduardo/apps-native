// (Maps) API-Key = AIzaSyCpCC5C3dTmkXuU2idaSYEmBnxs9PUC3e0

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class HeaderBar extends React.Component {

  render() {

    return (
       <View style={styles.main}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={ () => { this.props.onPress() } }>
            <Image
              source={ require('../img/lix.png') }
              style={{ width: 48, height: 48 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#000000' }}>{this.props.title}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>{this.props.subtitle}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row-reverse', paddingLeft: 12 }}>
          <TouchableOpacity onPress={ () => { this.props.onPress() } }>
            <Image
              source={ require('../img/lix.png') }
              style={{ width: 48, height: 48 }}
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
    justifyContent: 'center', 
    alignItems: 'center',
    paddingLeft: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#000000',
    shadowOpacity: 1, 
    shadowColor: 'black', 
    shadowOffset: {
            width: 0,
            height: 10
    },
    elevation: 10,
  },
});