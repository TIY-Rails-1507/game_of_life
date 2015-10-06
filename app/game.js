
$(document).ready (function() {

  var board = [];
  // 0 draw dead cell
  // 1 draw live cell
  // 2 dont do anything

  board[0] = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[1] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[2] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[3] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[4] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[5] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[6] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[7] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[8] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  board[9] = [1, 2, 2, 2, 2, 2, 2, 2, 2, 1];

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");



  

  draw(board, ctx);


});

function log(board, ctx) {
  for(var r = 0; r < board.length; r++) {
      console.log("Row " + r);
      for(var c = 0; c < board.length; c++) {

            console.log(board[r][c]);
        }
  }
}

function draw(board, ctx) {

  var width = 50;
  var height = width;
  var gridWidth = 500;
  var gridHeight = 500;

  ctx.fillRect(gridWidth-width,gridHeight-height,width,height);

  for(var r = 0; r < board.length; r++) {
      
      for(var c = 0; c < board.length; c++) {

            var x = c * width;
            var y = r * height;

            if(board[r][c] == 1) { // alive
              ctx.fillStyle = "#FF0000";
              ctx.fillRect(x,y,width,height);

            } else if (board[r][c] == 0){ // dead
              
              ctx.fillStyle = "#FFFFFF";
              ctx.fillRect(x,y,width,height);

            }
            
        }
  }
}

