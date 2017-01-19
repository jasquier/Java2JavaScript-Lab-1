" use strict ";

var display = document.getElementById("display");
var newline ="<br />";

function oneToTen() {

  display.innerHTML = "";

  var result = "oneToTen()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 10; i++ ) {
    result += i + newline;

  }

  display.innerHTML = result;
}

function oddNumbers() {

  display.innerHTML = "";

  var result = "oddNumbers()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 19; i += 2) {
    result += i + newline;
  }

  display.innerHTML = result;
}

function squares() {

  display.innerHTML = "";

  var result = "squares()" + newline;
  result += "***Output***" + newline;

  for ( var i = 1; i <= 10; i++ ) {
    result += (i*i) + newline;
  }

  display.innerHTML = result;
}

function random4() {

  display.innerHTML = "";

  var result = "random4()" + newline;

  display.innerHTML = result;
}

function even(n) {

  display.innerHTML = "";

  var result = "even(20)" + newline;

  display.innerHTML = result;
}

function powers(n) {

  display.innerHTML = "";

  var result = "powers(" + n + ")" + newline;

  display.innerHTML = result;
}

function areWeThereYet() {

  display.innerHTML = "";

  var areWeThereYet = "Arewethereyet" + newline;

  display.innerHTML = areWeThereYet;
}

function triangle() {

  display.innerHTML = "";

  var result = "triangle()" + newline;

  display.innerHTML = result;
}


function tableSquare() {

    display.innerHTML = "";

    var result = "tableSquare()" + newline;

    display.innerHTML = result;
}
function tableSquares(n) {

  display.innerHTML = "";

  var result = "tableSquares(" + n + ")" + newline;

  display.innerHTML = result;
}
