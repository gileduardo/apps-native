/*
  * Install: npm install --save react-navigation
  * Install: npm install --save react-native-phone-call
*/

import { createStackNavigator } from 'react-navigation';

import Menu from './src/screens/Menu';

export default createStackNavigator(
  {
    'Main' : {
        screen : Menu
    },
  },
  {
    navigationOptions : {
      title : 'Contatos',
      headerTintColor : 'black',
      headerStyle : {
        backgroundColor : '#E8E8E7',
      },
      headerTitleStyle : {
        fontSize : 26,
        color : 'black',
        alignSelf: 'center',
        paddingLeft: 5,
      }
    }
  }
);
