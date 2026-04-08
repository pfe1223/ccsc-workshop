## Problem

Create an Fast Fourier Transform (FFT) object that analyzes the music. Give the FFT object 512 bins, and use `0.5` as the smoothing factor. Your script should continually analyze the music.

### Running the Sketch

To help verify that you are properly analyzing the music, copy and paste the function below into your sketch. Be sure to call `showFft` inside the `draw` function. You also need to pass it the results of your FFT analysis.

```javascript
function showFft(s) {
  textAlign(CENTER, CENTER)
  let num = s.filter((n) => n > 0).length
  let str = `There are ${num} elements whose\nvalue is greater than 0`
  textSize(20)
  text(str, width/2, height/2)
}
```

Use the refresh button in the bottom-left panel to load your sketch. You should see text appear that tells you how many elements have a value greater than 0. Start the music. You should see this number quickly go up. It will bounce around, but remain somewhere in the 300's.

### Checking Your Work

If your sketch properly analyzes the music, use the button below to check your work. Move on to the next page if your code passes all of the tests.

{Check It!|assessment}(llm-based-auto-rubric-1711175266)
