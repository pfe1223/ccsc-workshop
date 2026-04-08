let x1, y1, x2, y2;
let gap;

function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
  gap = 25;
  x1 = gap + 50;
  y1 = gap + 50;
  x2 = gap + 500;
  y2 = gap + 150;
  textAlign(CENTER, CENTER)
  textSize(25)
}

function draw() {
  background(220);
  
  noStroke();
  fill("white");
  rect(width / 2, height / 2 - 25, 550, 200);
  strokeWeight(3);
  stroke("black");
  line(x1, y1, x2, y2);
  noStroke();
  fill("red");
  circle(x1, y1, 15);
  fill("blue");
  circle(x2, y2, 15);
  
  fill('red')
  text(`Point1: (${x1-25}, ${y1-25})`, 150, 262)
  fill('blue')
  text(`Point2: (${x2-25}, ${y2-25})`, 450, 262)
}

function insideRect() {
  return mouseX >= 25 && mouseX <= 575 && mouseY >= 25 && mouseY <= 225;
}

function touchingPoint(x, y) {
  return dist(mouseX, mouseY, x, y) < 15;
}

function mouseDragged() {
  if (insideRect()) {
    if (insideRect() && touchingPoint(x1, y1)) {
      x1 = mouseX;
      y1 = mouseY;
    } else if (touchingPoint(x2, y2)) {
      x2 = mouseX
      y2 = mouseY
    }
  }
}
