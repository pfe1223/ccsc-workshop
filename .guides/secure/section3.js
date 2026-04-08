let sound, button, sm

function preload() {
  sound = loadSound('music/Beat-Culture-Midori.mp3')
}

function setup() {
  createCanvas(640, 640);
  button = createButton('Play/Stop')
  button.mousePressed(() => {
    if (sm.sound.isPlaying()) {
      sm.sound.stop()
    } else {
      sm.sound.play()
    }
  })
  noStroke()
  fill(0)
  sm = new SoundMatrix(sound)
  sm.initialize()
}

function draw() {
  background(220);
  sm.analyze()
  sm.show()
}

class SoundMatrix {
  constructor(music) {
    this.sound = music
    this.fft = new p5.FFT()
    this.spectrum = []
    this.dots = []
    
  }
  
  initialize() {
    for (let i = 0; i < 32; i++) {
      for (let j = 0; j < 32; j++) {
        this.dots.push({
          x: j * width / 32 + 8,
          y: i * height / 32 + 8,
          fftIndex: i + j
        })
      }
    }
    let indices = []
    for (let i = 0; i < 1024; i++) {
      indices.push(this.dots[i].fftIndex)
    }
    let shuffled = shuffle(indices)
    for (let i = 0; i < 1024; i++) {
      this.dots[i].fftIndex = shuffled[i]
    }
  }
  
  analyze() {
    this.spectrum = this.fft.analyze()
  }
  
  show() {
    for (let i = 0; i < 1024; i++) {
      let dot = this.dots[i]
      let value = map(this.spectrum[dot.fftIndex], 0, 255, 0, 25)
      
      circle(dot.x, dot.y, value)
    }  
  }
}