import React from 'react'
import { View, StyleSheet } from 'react-native'

import MainScreen from './src/screens/MainScreen'

const App = () => {

    return (
      <View style={styles.main}>
        <MainScreen />
      </View>
    );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App
