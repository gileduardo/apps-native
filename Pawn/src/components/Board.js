import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Components
import BoxLine from './BoxLine';
import LoadBoard from '../util/LoadBoard';

export default class Board extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
    };
  }

  onPressBox(box) {
    this.props.onPress(box);
  }

  renderBoard() {

    const ret = this.props.board.map((item, index) => {
      return (
        <BoxLine 
          data={item} 
          key={index} 
          onPress={(box) => { this.onPressBox(box) } } 
        /> 
      );
    });

    return ( ret );
  }

  render() {

    return (
       <View style={styles.main}>
        { this.renderBoard() }              
       </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderWidth: 1,
    borderColor: '#666', 
    // marginTop: 12,
  }
});