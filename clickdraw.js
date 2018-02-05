//retrieve node in DOM via ID
var c = document.getElementById("slate");
console.log('c: ', c);
var toggle = document.getElementById("toggle");
console.log('toggle: ', toggle);
var clear = document.getElementById("clear");
console.log('clear: ', clear);
var shape = true; //true = circle, false = rectangle
console.log('shape: ', shape)
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
console.log('context: ', ctx);

var toggleFunction = function(e) { //toggles/changes between shapes
  shape = !shape;
  console.log(shape);
}

var drawCircle = function(e) {
  ctx.beginPath();
  ctx.strokeStyle="#FF0000"; //set stroke style red
  ctx.fillStyle="#FF0000"; //set fill style red
  ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI); //set arc shape -> e.offsetX, e.offsetY get coordinates of x and y; radius of 10, startAngle = 0 radians, endAngle = 2pi -- full circle)
  ctx.stroke(); //actually do the stroke
  ctx.fill(); //actually do the fill
}

var drawRectangle = function(e) {
  ctx.strokeStyle="#0000FF"; //set stroke style blue
  ctx.fillStyle="#0000FF" //set fill style blue
	ctx.fillRect(e.offsetX, e.offsetY, 20, 20); //x, y, width, height
}

var draw = function(e) {
  if (shape) { // if shape = true, then circle
    drawCircle(e);
  }
  else { // else, rectangle
    drawRectangle(e);
  }
}

var clearFunction = function(e) {
  ctx.clearRect(0, 0, c.width, c.height) //clears everything in a rect from the x, y of the upper hand corner through the given width/height
}

c.addEventListener("click", draw);
toggle.addEventListener("click", toggleFunction);
clear.addEventListener("click", clearFunction);
