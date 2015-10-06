
$(document).ready (function() {

  var board = [];
  // 0 draw dead cell
  // 1 draw live cell
  // 2 dont do anything

  // board[0] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[1] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[2] = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[3] = [0, 1, 0, 1, 0, 0, 0, 0, 0, 0];
  // board[4] = [0, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  // board[5] = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0];
  // board[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // board[9] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1];

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var size = 50;

  board = create_board(size);

  setInterval(function() { 
    console.log("Drawing");
    board = draw(board, ctx, size); 
  }, 1000);

  



  // alert("Done");

});

function log(board, ctx) {
  for(var r = 0; r < board.length; r++) {
      console.log("Row " + r);
      for(var c = 0; c < board.length; c++) {

            console.log(board[r][c]);
        }
  }
}

function create_board(size) {

 
  var gridWidth = 500;
  var gridHeight = 500;
  var width = gridHeight / size;
  var height = width;
  
  var board = [];


  for(var r = 0; r < size; r++) {
      board[r] = [];
      for(var c = 0; c < size; c++) {
        board[r][c] = (c % 2 == 0 ? 1 : 0);
      }
  }
  return board;
}

function draw(board, ctx, size) {

  var gridWidth = 500;
  var gridHeight = 500;
  var width = gridHeight / size;
  var height = width;

  var next_board = [];

  ctx.fillRect(gridWidth-width,gridHeight-height,width,height);

  for(var r = 0; r < board.length; r++) {
      next_board[r] = [];
      for(var c = 0; c < board.length; c++) {

            var x = c * width;
            var y = r * height;

            if(board[r][c] == 1) { // alive
              ctx.fillStyle = "#FF0000";
              ctx.fillRect(x,y,width,height);

            } else if (board[r][c] == 0){ // dead
              
              ctx.fillStyle = "#BBFFFF";
              ctx.fillRect(x,y,width,height);

            }  

            // figure next value
            var neighbourCount = countNeighbours(r,c,board); 

            if (board[r][c] == 1) {

              if (neighbourCount < 2) {
                next_board[r][c] = 0;

              } else if (neighbourCount > 3) { 

                next_board[r][c] = 0;

              } else {
                next_board[r][c] = 1;
              }
            } else {
              if (neighbourCount == 3) {

                next_board[r][c] = 1;
              } else {
                next_board[r][c] = 0;
              }
            }



        }
  }
  return next_board;
}

function countNeighbours(cell_row, cell_col, board) {
  var count = 0;
  if ( board[cell_row][cell_col+1] == 1) {
    count++;
  }
  if ( board[cell_row][cell_col-1] == 1) {
    count++;
  }
  if (board[cell_row + 1]) {
    if (board[cell_row + 1][cell_col] == 1) {
      count++;
    }
    if (board[cell_row + 1][cell_col - 1] == 1) {
      count++;
    }
    if (board[cell_row + 1][cell_col + 1] == 1) {
      count++;
    }
  }
  if(board[cell_row - 1]) {
    if (board[cell_row - 1][cell_col] == 1) {
      count++;
    }
    if (board[cell_row - 1][cell_col - 1] == 1) {
      count++;
    }
    if (board[cell_row - 1][cell_col + 1] == 1) {
      count++;
    }
  }

  return count;

}


