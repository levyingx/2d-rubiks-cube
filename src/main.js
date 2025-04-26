import './style.css'
import Face from './Face';

function R() {
  // do R according to F orientation

  // green[2, 5, 8] go to white[2, 5, 8]
  // white[2, 5, 8] go to blue[2, 5, 8]
  // blue [2, 5, 8] go to yellow[2, 5, 8]
  // yellow[2, 5, 8] go to blue[2, 5, 8]

  // generalizing:
  // F[2, 5, 8] go to U[2, 5, 8]
  // U[2, 5, 8] go to B[2, 5, 8]
  // B[2, 5, 8] go to D[2, 5, 8]
  // D[2, 5, 8] go to B[2, 5, 8]
  
}

const red = new Face('R', 'red');
const green = new Face('L', 'green');
const blue = new Face('B', 'blue');
const white = new Face('U', 'white');
const yellow = new Face('D', 'yellow');
const orange = new Face('L', 'orange');

red.render();
green.render();
blue.render();
yellow.render();
white.render();
orange.render();
