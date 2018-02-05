//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
//Make the color Red
ctx.fillStyle = "#FF0000";
//Make a rectangle at coordinates (50, 50) with width 100 and height 200.
ctx.fillRect(50, 50, 100, 200);
}

//goes through items and activates its responses via addEventListener
var activate = function() {

}

var drawShapes = function () {
    var myCanvas = document.getElementById('slate');
}



//initial set up
//1. activate event listener for the button
var toggle = document.getElementById('toggle');
console.log('TOGGLE: ', toggle);
toggle.addEventListener('onclick', toggleCallback);
//2. activate responses for each of the initital items in the list
activate();
