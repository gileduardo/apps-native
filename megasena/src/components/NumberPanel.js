import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NumberPanel = props => {

	const panel = props.numbers.map((item, index) => {
		return (
			<View key={ index } style={ styles.item }>
				<Text style={ styles.text }> { item } </Text>
			</View>
		);
	});

	return (
			<View style={ styles.main }>
				<View style={ { flexDirection: 'row' } }>
					{ panel }
				</View>		
			</View>
	);
}

const styles = StyleSheet.create({

	main: {
	    borderColor: '#208036',
	    margin: 2,
	    padding: 5,
	    borderWidth: 3,
	},
	item: {
	    flex: 1,
	    margin: 2,
	    backgroundColor: '#C89827',
	    alignItems: 'center', 
  	},
	text: {
	    fontSize: 32,
	    fontWeight: '900',
	    color: '#FFF' 
  	},
});

export default NumberPanel;