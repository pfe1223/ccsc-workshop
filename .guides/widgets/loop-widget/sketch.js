let step = 0
let totalSteps = 17
let loopText = ['for (', 'let i = 0;', 'i < 5;', 'i++', ') {', 'console.log(i)', '}']
let stepWords = ['Start the Loop', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7', 'Step 8', 'Step 9', 'Step 10', 'Step 11', 'Step 12', 'Step 13', 'Step 14', 'Step 15', 'Step 16', 'Step 17']
let explanationWords = ['Click the right arrow to\nstep through the loop', 'Initialize i with\nthe value 0', 'i equals 0 and\n0 is less than 5', 'Print 0 to the screen', 'Increment i,\nnow i equals 1', 'i equals 1 and\n1 is less than 5', 'Print 1 to the screen', 'Increment i,\nnow i equals 2', 'i equals 2 and\n2 is less than 5', 'Print 2 to the screen', 'Increment i,\nnow i equals 3', 'i equals 3 and\n3 is less than 5', 'Print 3 to the screen', 'Increment i,\nnow i equals 4', 'i equals 4 and\n4 is less than 5', 'Print 4 to the screen', 'Increment i,\nnow i equals 5', 'i equals 5 and\n5 is NOT less than 5,\nloop ends']

function setup() {
  createCanvas(600, 360);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
}

function draw() {
  background(220);
  drawButton(width - 50, height - 50, 'right')
  drawButton(50, height - 50, 'left')
  // showStepText(step)
  drawLoopText(step, loopText)
}

function makeBubble(x, y, words) {
  // draw the bubble
  let w = 190
  let h = 80
  let arrowSide = 15
  stroke('red')
  fill('white')
  strokeWeight(2)
  if (step == 0) {
    rect(width/2, 115, w, h)
  } else if (![3, 6, 9, 12, 15].includes(step)) {
    beginShape()
    vertex(x - w/2, y - h/2)
    vertex(x + w/2, y - h/2)
    vertex(x + w/2, y + h/2)
    vertex(x + arrowSide, y + h/2)
    vertex(x, y + h/2 + arrowSide)
    vertex(x - arrowSide, y + h/2)
    vertex(x - w/2, y + h/2)
    endShape(CLOSE)
  } else {
    y += 160
    beginShape()
    vertex(x - w/2, y - h/2)
    vertex(x - arrowSide, y - h/2)
    vertex(x, y - h/2 - arrowSide)
    vertex(x + arrowSide, y - h/2)
    vertex(x + w/2, y - h/2)
    vertex(x + w/2, y + h/2)
    vertex(x - w/2, y + h/2)
    endShape(CLOSE)
  }
  
  // add text to the bubble
  noStroke()
  fill('red')
  textSize(17)
  text(words, x, y)
}

function drawLoopText(step, loopText) {
  // draws and colors the text of the for-loop
  // to the canvas
  
  noStroke()
  
  let x0 = 117 + textWidth(loopText[0]) / 2
  let x1 = x0 + textWidth(loopText[0])/2 + 10 + textWidth(loopText[1])/2
  let x2 = x1 + textWidth(loopText[1])/2 + 10 + textWidth(loopText[2])/2
  let x3 = x2 + textWidth(loopText[2])/2 + 10 + textWidth(loopText[3])/2
  let x4 = x3 + textWidth(loopText[3])/2 + 10 + textWidth(loopText[4])/2
  let x5 = 155 + textWidth(loopText[5])/2
  let x6 = 117 + textWidth(loopText[6])/2
  
  let c0 = 'black'
  let c1 = 'black'
  let c2 = 'black'
  let c3 = 'black'
  let c4 = 'black'
  let c5 = 'black'
  let c6 = 'black'
  
  if (step == 0) {
    showStepText(step, width/2, 115)
  } else if (step == 1) {
    c1 = 'red'
    showStepText(step, x1, 115)
  } else if ([2, 5, 8, 11, 14, 17].includes(step)) {
    c1 = 'black'
    c2 = 'red'
    showStepText(step, x2, 115)
  } else if ([3, 6, 9, 12, 15].includes(step)) {
    c2 = 'black'
    c5 = 'red'
    showStepText(step, x5, 155)
  } else if ([4, 7, 10, 13, 16].includes(step)) {
    c5 = 'black'
    c3 = 'red'
    showStepText(step, x3, 115)
  }
  
  textSize(35)
  fill(c0)
  text(loopText[0], x0, 190)
  fill(c1)
  text(loopText[1], x1, 190)
  fill(c2)
  text(loopText[2], x2, 190)
  fill(c3)
  text(loopText[3], x3, 190)
  fill(c4)
  text(loopText[4], x4, 190)
  fill(c5)
  text(loopText[5], x5, 240)
  fill(c6)
  text(loopText[6], x6, 290)
}

function stepText(stepWords, explanationWords, x, y) {
  textSize(40)
  fill('black')
  text(stepWords, width/2, 50)
  fill('red')
  textSize(30)
  makeBubble(x, y, explanationWords)
}

function showStepText(step, x, y) {
  fill('black')
  noStroke()
  stepText(stepWords[step], explanationWords[step], x, y)
}

function mousePressed() {
  if (dist(mouseX, mouseY, width - 50, height - 50) < 20) {
    if (step + 1 <= totalSteps) {
      step++
    } else {
      step = 0
    }
  } else if (dist(mouseX, mouseY, 50, height - 50) < 20) {
    if (step - 1 >= 0) {
      step--
    } else {
      step = totalSteps
    }
  }
}

function drawButton(x, y, dir) {
  let radius = 20
  let r = radius * 0.6
  
  noStroke()
  fill('blue')
  circle(x, y, radius * 2)
  
  stroke('white')
  strokeWeight(5)
  let x1 = r * cos(0) + x
  let y1 = r * sin(0) + y
  let x2 = r * cos(180) + x
  let y2 = r * sin(180) + y
  line(x1, y1, x2, y2)
  if (dir === 'left') {
    let x3 = r * 0.8 * cos(240) + x
    let y3 = r * 0.8 * sin(240) + y
    line(x2, y2, x3, y3)
    
    let x4 = r * 0.8 * cos(120) + x
    let y4 = r * 0.8 * sin(120) + y
    line(x2, y2, x4, y4)
  } else if (dir === 'right') {   
    let x3 = r * 0.8 * cos(300) + x
    let y3 = r * 0.8 * sin(300) + y
    line(x1, y1, x3, y3)
    
    let x4 = r * 0.8 * cos(60) + x
    let y4 = r * 0.8 * sin(60) + y
    line(x1, y1, x4, y4)    
  }
}