let info = ["let", "number", "=", "7"];
let debug = false;
let info0 = "Create a variable";
let info1 = "Name the variable 'number'";
let info2 = "Assign the variable a value";
let info3 = "7 is the value of the variable";
let colour

function setup() {
  createCanvas(450, 200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  if (debug) {
    rectMode(CENTER);
    noFill();
    stroke("red");
    rect(100, 75, 60, 50);
    rect(225, 75, 160, 50);
    rect(330, 75, 30, 50);
    rect(368, 75, 35, 50);
  }
  
  if (correctX(70, 130) && correctY()) {
    showExplanation(info0)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[0], colour, 100, 75)
  
  if (correctX(145, 305) && correctY()) {
    showExplanation(info1)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[1], colour, 225, 75)
  
  if (correctX(315, 345) && correctY()) {
    showExplanation(info2)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[2], colour, 330, 75)
  
  if (correctX(351, 386) && correctY()) {
    showExplanation(info3)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[3], colour, 368, 75)
}

function correctY() {
  return mouseY > 50 && mouseY < 100;
}

function correctX(x1, x2) {
  return mouseX > x1 && mouseX < x2
}

function showExplanation(words) {
  fill('blue')
  textSize(30)
  text(words, width/2, height - 75)
}

function drawText(words, colour, x, y) {
  textSize(45);
  fill(colour)
  text(words, x, y)
}
