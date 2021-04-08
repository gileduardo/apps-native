
const LoadBoard = () => {

  let board = Array();
  let words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let colors = ['#FFF', '#666', '#729BEB'];
  let cont = 0;
  let piece;

  for(let l=1; l < 9; l++) {
    let line = Array();

    for(let c=0; c < 8; c++) {

      if(l == 2) { piece = 'b_pawn'; }
      else if(l == 7) { piece = 'w_pawn'; }
      else { piece = 'empty'; }

      line[c] = {
        'line': l,
        'column': words[c],
        'color': colors[cont%2],
        'status' : piece,
        'init' : 0,
      }
    
      cont++;
    }

    if(l%2 == 0) { cont = 0; }
    else { cont = 1; }  

    board[l] = line;
  }

  return board;
}

export default LoadBoard;