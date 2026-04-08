let hSlider, sSlider, bSlider
let hueY, satY, brightY, gap

function setup() {
  createCanvas(400, 200);
  
  gap = 45
  hueY = 45
  satY = hueY + gap
  brightY = satY + gap
  
  hSlider = createSlider(0, 255, 0)
  hSlider.position(40, hueY + 10)
  
  sSlider = createSlider(0, 255, 255)
  sSlider.position(40, satY + 10)
  
  bSlider = createSlider(0, 255, 255)
  bSlider.position(40, brightY + 10)
  
  textAlign(CENTER, CENTER)
  textSize(20)
  colorMode(HSB)
}

function draw() {
  background('lightgray');
  
  let hue = hSlider.value()
  let sat = sSlider.value()
  let bright = bSlider.value()
  
  fill(0)
  text(`Hue: ${hue}`, 110, hueY)
  text(`Saturation: ${sat}`, 110, satY)
  text(`Brightness: ${bright}`, 110, brightY)
  
  fill(hue, sat, bright)
  square(250, 50, 100)
  
}