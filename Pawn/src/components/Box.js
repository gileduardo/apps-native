import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Box extends React.Component {

  constructor(props) {
    super(props);
  }

  onPressBox(box) {
    this.props.onPress(box);
  }

  loadIcon() {

    if(this.props.box.status == 'w_pawn') {
      return require('../img/w_pawn_ico.png');
    }
    else if(this.props.box.status == 'b_pawn') {
      return require('../img/b_pawn_ico.png');
    }
    else if(this.props.box.status == 's_pawn') {
      return require('../img/s_pawn_ico.png');
    }

    return require('../img/empty_ico.png');
  }

  renderBox() {

    const icon = this.loadIcon();
    const size = (screenWidth-10)/8;

    // if(this.state.status == 'w_pawn') {
      return (
        <View style={[styles.box, {backgroundColor: this.props.box.color}]}>
          <TouchableOpacity onPress={ (box) => { this.onPressBox(this.props.box) } }>
            <Image 
              source={ icon }
              style={{ width: size, height: size }}
            />
          </TouchableOpacity>
        </View>
      )  
    /*}
    else {
      return (
        <View style={[styles.box, {backgroundColor: this.state.color}]}>
          <Image 
            source={ icon }
            style={{ width: size, height: size }}
          />
        </View>
      )
    }*/
  }

  render() {
    return (
      <View style={styles.main}> 
        { this.renderBox() }
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: { 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});