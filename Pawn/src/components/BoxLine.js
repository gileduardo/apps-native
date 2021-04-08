import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Components
import Box from './Box';

export default class BoxLine extends React.Component {

  onPressBox(box) {
    this.props.onPress(box);
  }

  renderLine() {

    const line = this.props.data.map((item, index) => {
      return (
        <Box 
          box = {item} 
          key={index} 
          onPress={(box) => { this.onPressBox(box) }} 
        />
      );
    });

    return ( line );
  }

  render() {

    return (
      <View style={styles.main}>
        { this.renderLine() } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
  },
});

