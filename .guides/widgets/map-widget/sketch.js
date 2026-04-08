let slider

function setup() {
  createCanvas(600, 300);
  slider = createSlider(0, 100, 50)
  noStroke()
  textAlign(CENTER, CENTER)
  textSize(40)
}

function draw() {
  background(220);
  
  let sliderValue = slider.value()
  let circleValue = map(sliderValue, 0, 100, 0, width)
  fill('red')
  circle(circleValue, 100, 80)
  
  fill('black')
  text(`Slider Value: \n${sliderValue}`, 125, 240)
  text(`Map Value: \n${circleValue}`, width - 125, 240)
}