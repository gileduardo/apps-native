
const MakeMove = (board, box, pos, flag) => {

  let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let colors = ['#FFF', '#666', '#729BEB'];
  let cont = 0;

  for(let l=1; l < 9; l++) {
    for(let c=0; c < 8; c++) {
      // Deseleção - Movimento Impossível
      if(flag == 1) {
        if(l == pos.line && words[c] == pos.column) {
          board[l][c].status = 'w_pawn'
        }
      }
      else {  
        // Movimento 
        if(pos != null) {
          // De - Empty
          if(l == pos.line && words[c] == pos.column) {
            board[l][c].status = 'empty'
            board[l][c].init = 0
          }
          // Para - Peça
          else if(l == box.line && words[c] == box.column) {
            board[l][c].status = 'w_pawn'
            board[l][c].init = 1
          }
        }
        // Seleção
        else if(l == box.line && words[c] == box.column) {
          board[l][c].status = 's_pawn'
        }
      }
      cont++;
    }

    if(l%2 == 0) { cont = 0; }
    else { cont = 1; }  
  }

  return board;
}

export default MakeMove;