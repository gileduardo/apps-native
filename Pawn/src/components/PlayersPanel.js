import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Players extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  renderContent() {

    if(this.props.order == 0) {
      return (
        <View style={styles.main}>
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
            <View>
              <Image
                  source={ require('../img/b_pawn_ico.png') }
                  style={{ width: 36, height: 36 }}
              />
            </View>
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#000000' }}>
              {this.props.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#000000' }}>
              {this.props.text_a}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#000000' }}>
              {this.props.movs}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#000000' }}>
              {this.props.text_b}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#000000' }}>
              {this.props.caps}
            </Text>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.main}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#000000' }}>
              {this.props.text_a}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#000000' }}>
              {this.props.movs}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#000000' }}>
              {this.props.text_b}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#000000' }}>
              {this.props.caps}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
            <View>
              <Image
                  source={ require('../img/w_pawn_ico.png') }
                  style={{ width: 36, height: 36 }}
              />
            </View>
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#000000' }}>
              {this.props.name}
            </Text>
          </View>
        </View>
      );
    }

  }

  render() {
    return (
      <View>
       { this.renderContent() }
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
    // borderWidth: 1,
    margin: 2,
    marginTop: 0,
    padding: 4,
  }
});