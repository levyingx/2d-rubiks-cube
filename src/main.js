import './style.css'

class Face {
  constructor(code, name) {
    this.code = code;
    this.name = name;
    this.array = Array(9).fill(name);
  }

  render() {
    const element = document.createElement('div');
    element.className = 'cube-face';
    element.id = `cube-${this.name}`;
  
    for (let i = 0; i < 9; i++) {
      const sticker = document.createElement('div');
      sticker.style.backgroundColor = this.array[i];
      element.appendChild(sticker);
    }
  
    document.getElementById(`cube`).appendChild(element);
  }
}

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
