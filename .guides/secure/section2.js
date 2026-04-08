let sound, button, fft

function preload() {
  sound = loadSound('music/Beat-Culture-Midori.mp3')
}

function setup() {
  createCanvas(400, 300);
  button = createButton('Play/Stop')
  button.mousePressed(() => {
    if (sound.isPlaying()) {
      sound.stop()
    } else {
      sound.play()
    }
  })
  fft = new p5.FFT(0.5, 512)
}

function draw() {
  background(220);
  let spectrum = fft.analyze()
  showFft(spectrum)
}

function showFft(s) {
  textAlign(CENTER, CENTER)
  let num = s.filter((n) => n > 0).length
  let str = `There are ${num} elements whose\nvalue is greater than 0`
  textSize(20)
  text(str, width/2, height/2)
}