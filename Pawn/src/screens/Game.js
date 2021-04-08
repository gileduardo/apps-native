import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Components
import PlayersPanel from '../components/PlayersPanel';
import Board from '../components/Board';
// Util
import LoadBoard from '../util/LoadBoard';
import MakeMove from '../util/MakeMove';
import Rules from '../util/Rules';
import CPU from '../util/CPU';

export default class Game extends React.Component {

	constructor(props) {
	    super(props);
	  
	    this.state = {
	    	mov: 0,
	    	lin_sel: -1,
	    	col_sel: '?',
	    	init_sel: -1,
	    	use_mov: 0,
	    	use_cap: 0,
			cpu_mov: 0,
			cpu_cap: 0,
			board: LoadBoard(),
	    };
 	}

 	onPressBox(box) {

 		// Seleção
 		if(this.state.mov == 0 && box.status == 'w_pawn') {
 			this.setState({	
 				mov: 1,
	 			lin_sel: box.line,
	 			col_sel: box.column,
	 			init_sel: box.init,
	 			board: MakeMove(this.state.board, box, null, 0),
	 		})
 		}
 		// Movimento
 		else if (this.state.mov == 1){

 			origem = {
 				'line': this.state.lin_sel, 
 				'column': this.state.col_sel,
 				'init': this.state.init_sel,
 			}

 			let ret = Rules(this.state.board, origem, box)

 			// Movimento possível
 			if(ret != 0) {
 				this.setState({	
	 				mov: 0,
		 			lin_sel: -1,
		 			col_sel: 'x',
		 			use_mov: this.state.use_mov + 1,
		 			use_cap: this.state.use_cap + ret - 1,
		 			board: MakeMove(this.state.board, box, origem, 0),
	 			})

	 			// Movimento Computador
	 			setTimeout(() => { this.cpuMove()} , 700)
 			} 			
 			// 	Movimento impossível
 			else {
 				this.setState({	
	 				mov: 0,
		 			lin_sel: -1,
		 			col_sel: 'x',
		 			board: MakeMove(this.state.board, box, origem, 1),
	 			})
 			}
 		}	
 	}

 	cpuMove() {

 		let result = CPU(this.state.board)

 		this.setState({	
			cpu_mov: this.state.cpu_mov + result.mov,
 			cpu_cap: this.state.use_cap + result.cap,
			board: result.board,
		})	
 	}

	render() {
		return (
			<View style={styles.main}>
				<PlayersPanel 
					text_a = "Movimentos"
					text_b = "Capturas"
					name = "Computador"
					order = '0'
					movs = {this.state.cpu_mov}
					caps = {this.state.cpu_cap}
				/>
				<Board 
					board = { this.state.board }
					onPress={ (box) => { this.onPressBox(box) } } 
				/>
				<PlayersPanel 
					text_a = "Movimentos"
					text_b = "Capturas"
					name = "Você"
					order = '1'
					movs = {this.state.use_mov}
					caps = {this.state.use_cap}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  }
});

// onRef = { (ref) => (this.child = ref) }