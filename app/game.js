
$(document).ready (function() {

  var rows = [];

  rows[0] = [true, false, false, false, false, false, false, false, false, false];
  rows[1] = [false, true, false, false, false, false, false, false, false, false];
  rows[2] = [false, false, false, false, false, false, false, false, false, false];
  rows[3] = [false, false, false, false, false, false, false, false, false, false];
  rows[4] = [false, false, false, false, false, false, false, false, false, false];
  rows[5] = [false, false, false, false, true, false, false, false, false, false];
  rows[6] = [false, false, false, false, false, false, false, false, false, false];
  rows[7] = [false, false, false, false, false, false, false, false, false, false];
  rows[8] = [false, false, false, false, false, false, false, false, false, false];
  rows[9] = [false, false, false, false, false, false, false, false, false, true];

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);

});