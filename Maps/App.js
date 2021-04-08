/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow

 * Google Maps: AIzaSyCpCC5C3dTmkXuU2idaSYEmBnxs9PUC3e0
 */

import React from 'react';
import { StyleSheet, Text, View , TextInput, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 
export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  
  /*render() {

    return (
      <MapView
        initialRegion={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }*/

  render() {

    var mapStyle=[
      {"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},
      {"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},
      {"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},
      {"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
      {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
      {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},
      {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},
      {"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},
      {"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},
      {"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},
      {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},
      {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},
      {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},
      {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},
      {"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
      {"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},
      {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},
      {"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}
    ];

    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <MapView.Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'SISDLE - Instituto Federal'}
            description={'Bloco Didático'}
            image={ require('./src/img/trash_ico.png') }
          />

          <MapView.Marker
            draggable
            coordinate={{
              latitude: 37.76825,
              longitude: -122.4554,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'SISDLE - Prefeitura Municipal'}
            description={'Secretaria Meio Ambiente'}
            image={ require('./src/img/trash_ico.png') }
          />

          <MapView.Marker
            draggable
            coordinate={{
              latitude: 37.80000,
              longitude: -122.4554,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'SISDLE - Hiper Condor'}
            description={'Entrada Principal'}
            image={ require('./src/img/trash_ico.png') }
          />

        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },

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
     top: '15%',
     height: '75%',
     width: '100%',
     backgroundColor: 'white',
  },
  footer: {
    position: 'absolute', 
    bottom: 0,
    height: '14%',
    width: '100%',
  }
});