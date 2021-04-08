
import React from 'react';
import { StyleSheet, View } from 'react-native';

import ButLine from './ButLine';

class ButMatrix extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			cont: 0,
			data_matrix: this.loadMatrix(0),
			dados: [
					{'nome': 'Gil Eduardo', 'login': 'gil'}, 
					{'nome': 'Ana Paula', 'ana': 'ana'}
				   ],
	    };
	}

	componentDidMount() {
    	this.props.onRef(this);
  	}

	loadMatrix(flag) {

	    // Cria a Matriz com os Dados dos Botões
	    let num = 1, title;
	    let matrix = Array();

	    for(let l=0; l < this.props.rows; l++) {
			let line = Array();
			for(let c=0; c < this.props.cols; c++) {
				title = "" + num;
				if(num < 10) { title = "0" + title; }

				line[c] = {
					'title': title,
					'color': this.props.color,
					'value': num, 
				}
				num++;
			}
			matrix[l] = line;
	    }

	    if(flag == 1) {

	    	console.log('setState() - ButMatrix');
	    	this.setState({
				cont: 0,
				data_matrix: matrix,
	    	});
	    }

	    return matrix;
  	}

	onPress(val) {

		let total = this.state.cont;
		let copy = this.state.data_matrix;
		let dados;

	    for(let l=0; l < this.props.rows; l++) {
	    	for(let c=0; c < this.props.cols; c++) {
				const { value, color } = copy[l][c];
				if(value == val) {
					// Selecionar
					if(color == this.props.color) { 
						if(total < this.props.sel_max) {
							copy[l][c].color = this.props.sel_color;
							dados = { 'num': val, 'sel': 1 }
							total++;
						}
						else {
							dados = { 'num': val, 'sel': -1 }
						}
					}
					// Deselecionar
					else {
						copy[l][c].color = this.props.color;
						dados = { 'num': val, 'sel': 0 }
						total--;
					}
				}
			}
		}

		this.setState({
			cont: total,
			data_matrix: copy,	
		});

		this.props.onPress(dados);
	}

  	render() {

  		const line = this.state.data_matrix.map((row, index) => {
  				return (
					<ButLine
						key = { index }
		            	buttons = { row }
						onPress = { (val) => this.onPress(val) }
					/>
				);
		});

    	return (
 			<View style={ styles.main }>
 				{ line }
 			</View>
    	);
    }
}

const styles = StyleSheet.create({

	main: {
		borderColor: '#208036',
		margin: 2,
		padding: 5,
		borderWidth: 3,
	},
});

export default ButMatrix;