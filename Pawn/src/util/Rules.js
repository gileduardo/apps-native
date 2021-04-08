
const Rules = (board, origem, destino) => {

	// MOVIMENTOS VÁLIDOS
	dif_line = origem.line - destino.line;
	dif_column = origem.column.charCodeAt(0) - destino.column.charCodeAt(0);

	// Captura de Peça
	if(dif_column == 1 || dif_column == -1) { 
		if(destino.status == 'b_pawn') {
			return 2; 
		}
	}
	// Movimento Normal
	else if(dif_column == 0) {
		// Uma casa
		if(dif_line == 1) {
			if(destino.status == 'empty') {
				return 1;
			}
		}
		// Duas Casas
		else if(dif_line == 2) {
			if(origem.init == 0 && destino.status == 'empty') {
				return 1;
			}	
		}
	} 

	return 0;
}

export default Rules;