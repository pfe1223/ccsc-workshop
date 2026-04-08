let info = ["let myArray ", "=", "[", "1,", "2,", "3,", "4,", "]"];
let debug = false;
let info0 = "Create the variable myArray";
let info1 = "Assign the array [1, 2, 3, 4] to myArray";
let info2 = "Start the array";
let info3 = "The value of myArray[0] is 1";
let info4 = "The value of myArray[1] is 2";
let info5 = "The value of myArray[2] is 3";
let info6 = "The value of myArray[3] is 4";
let info7 = "End the array";
let colour

function setup() {
  createCanvas(600, 250);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  if (debug) {
    rectMode(CENTER);
    noFill();
    stroke("red");
    rect(155, 75, 235, 50);
    for (let i = 1; i < info.length; i++) {
      square(i * 42 + 265, 75, 40);
    }
  }
  
  if (correctX(38, 272) && correctY()) {
    showExplanation(info0)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[0], colour, 155, 75)
  
  if (correctX(287, 327) && correctY()) {
    showExplanation(info1)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[1], colour, 307, 75)
  
  if (correctX(329, 369) && correctY()) {
    showExplanation(info2)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[2], colour, 349, 75)
  
  if (correctX(371, 411) && correctY()) {
    showExplanation(info3)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[3], colour, 391, 75)
  
  if (correctX(413, 453) && correctY()) {
    showExplanation(info4)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[4], colour, 433, 75)
  
  if (correctX(455, 495) && correctY()) {
    showExplanation(info5)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[5], colour, 475, 75)
  
  if (correctX(497, 537) && correctY()) {
    showExplanation(info6)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[6], colour, 517, 75)
  
  if (correctX(539, 579) && correctY()) {
    showExplanation(info7)
    colour = 'red'
  } else {
    colour = 'black'
  }
  drawText(info[7], colour, 559, 75)
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
