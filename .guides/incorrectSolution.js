let angle = 0
let sound, fft, button

function preload() {
  sound = loadSound('music/Beat-Culture-Midori.mp3')
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  stroke(0)
  strokeWeight(5)
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
  background(255);
  translate(width / 2, height / 2)
  for (let i = -18; i < 18; i++) {
    angle += i* 0.3
    let x = cos(angle) * 150
    let y = -cos(angle) * 150
    line(x, i * 10 + 10, y, i* 10 + 10)
  }
  angle += 1 
}

