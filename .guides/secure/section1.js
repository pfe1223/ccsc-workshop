let sound, button

function preload() {
  sound = loadSound('music/Beat-Culture-Midori.mp3')
}

function setup() {
  createCanvas(400, 400);
  button = createButton('Play/Stop')
  button.mousePressed(() => {
    if (sound.isPlaying()) {
      sound.stop()
    } else {
      sound.play()
    }
  })
}

function draw() {
  background(220);
}