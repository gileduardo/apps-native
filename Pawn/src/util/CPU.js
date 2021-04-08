
const CPU = (board) => {

	let ok = 0, cap = 0, mov = 0, flag = 0, nr = 0;
	
	for(let l=1; l < 9 && ok == 0; l++) {
    	for(let c=0; c < 8 && ok == 0; c++) {
    		// Peça do CPU
    		if(board[l][c].status == 'b_pawn') {
    			// Tenta Captura
    			if(flag == 0) {
	    			// Tenta capturar à esquerda
	    			if(l < 8 && c > 0 && board[l+1][c-1].status == 'w_pawn'){
	    				mov = cap = ok = 1 
	    				// Origem
	    				board[l][c].status = 'empty'
	    				board[l][c].init = 0
	    				// Destino
	    				board[l+1][c-1].status = 'b_pawn' 
	    				board[l+1][c-1].init = 1
	    			}
	    			// Tenta capturar à direta
	    			else if(l < 8 && c < 7 && board[l+1][c+1].status == 'w_pawn'){
	    				mov = cap = ok = 1 
	    				// Origem
	    				board[l][c].status = 'empty' 
	    				board[l][c].init = 0
	    				// Destino
	    				board[l+1][c+1].status = 'b_pawn' 
	    				board[l+1][c+1].init = 1
	    			}

	    			nr++;
	    		}
	    		// Efetua Movimento
	    		else if(flag == 1) {
	    			// Duas casas
	    			if(board[l][c].init == 0 && board[l+2][c].status == 'empty') {
	    				mov = ok = 1 
	    				// Origem
	    				board[l][c].status = 'empty'
	    				board[l][c].init = 0	 
	    				// Destino
	    				board[l+2][c].status = 'b_pawn', 
	    				board[l+2][c].init = 1
	    			}
	    			// Uma casa
	    			else if(board[l][c].init == 0 && board[l+1][c].status == 'empty') {
	    				mov = ok = 1 
	    				// Origem
	    				board[l][c].status = 'empty' 
	    				board[l][c].init = 0
	    				// Destino
	    				board[l+1][c].status = 'b_pawn' 
	    				board[l+1][c].init = 1
	    			}
				}
    		}

    		// Reinicia Laço
    		if(flag < 2 && l == 8 && c == 7) {
    			flag++
    			l = 1
    			c = 0
    		}
    	}
    }

	let ret = {
 		'mov': mov,
		'cap': cap,
		'board': board,
	}

	return ret;
}

export default CPU;