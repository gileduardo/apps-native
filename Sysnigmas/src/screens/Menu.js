
import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ImageBackground
  } from 'react-native';

export default class Login extends Component {

  constructor(props) {
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Gil</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4A6C41',
    borderWidth: 3,
    backgroundColor: '#FFF',
  },
});
