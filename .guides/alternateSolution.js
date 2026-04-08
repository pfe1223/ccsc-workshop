let sound, fft, button

function preload() {
  sound = loadSound('music/Beat-Culture-Midori.mp3')
}

function setup() {
  createCanvas(800, 300)
  colorMode(HSB)
  strokeWeight(3)
  fft = new p5.FFT(0.8, 128)
  button = createButton('Play/Stop')
  button.mousePressed(() => {
    if (sound.isPlaying()) {
      sound.stop()
    } else { // the song isn't playing
      sound.play()
    }
  })
}

function draw() {
  background(0)
  let spectrum = fft.analyze()
  
  for (let i = 0; i < spectrum.length; i++) {
    let linePosition = map(i, 0, spectrum.length, 0, width)
    let lineLength = map(spectrum[i], 0, 255, 0, height)
    let lineColor = map(linePosition, 0, 800, 0, 255)
    stroke(lineColor, 255, 255)
    line(linePosition, height, linePosition, height - lineLength)
  }
}