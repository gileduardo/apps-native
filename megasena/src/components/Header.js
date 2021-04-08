import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Header = () => {

	return (
		<View style={styles.main}> 
          <Image
            source={ require('../img/logo_mega.png') }
            style={ {flex: 1, resizeMode: "stretch"} }
          />
        </View>		
    );
}

const styles = StyleSheet.create({

	main: {
	    flex: 1,
	    flexDirection: 'row',
	    borderColor: '#208036',
	    margin: 2,
	    padding: 1,
	    borderWidth: 3,
	  },
});

export default Header;