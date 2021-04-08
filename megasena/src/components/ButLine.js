
import React from 'react';
import { StyleSheet, View } from 'react-native';

import But from './But';

class ButLine extends React.Component {

	onPress(val) {
		this.props.onPress(val);
	}

	render() {

		const line = this.props.buttons.map((item, index) => {
			return (
				<But
					key = { item.value }
	            	title= { item.title }
	            	color = { item.color } 
	            	value = { item.value }
					onPress = { (val) => this.onPress(val) }
				/>
			);
		});

		return(
			<View style={ styles.main }>
				{ line }
			</View>			
		);
	}
};

const styles = StyleSheet.create({

	main: {
		flexDirection: 'row',
	},
});

export default ButLine;