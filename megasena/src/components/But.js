
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class But extends React.Component  {

	onPress(val) {
		this.playSound();
		this.props.onPress(val);
	}

	async playSound() {

	}

	render() {
		return (
			<View style={styles.main}>
				<Button 
					title = { this.props.title }
					color = { this.props.color } 
					onPress = { () => this.onPress(this.props.value) }
				/>
			</View>  
	    );
	}
}

const styles = StyleSheet.create({

	main: {
		flex: 1,
		margin: 2,
	},
});

export default But;