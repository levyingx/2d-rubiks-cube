import './style.css'

const red = {code: 'R', name: 'red', array: Array(9).fill('red')};
const green = {code: 'F', name: 'green', array: Array(9).fill('green')};
const blue = {code: 'B', name: 'blue', array: Array(9).fill('blue')};
const white = {code: 'U', name: 'white', array: Array(9).fill('white')};
const yellow = {code: 'D', name: 'yellow', array: Array(9).fill('yellow')};
const orange = {code: 'L', name: 'orange', array: Array(9).fill('orange')};

function render(object) {
  const element = document.createElement('div');
  element.className = 'cube-face';
  element.id = `cube-${object.name}`;

  for (let i = 0; i < 9; i++) {
    const sticker = document.createElement('div');
    sticker.style.backgroundColor = object.array[i];
    element.appendChild(sticker);
  }

  document.getElementById(`cube`).appendChild(element);
}

function R() {
  // do R according to F perspective
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

render(orange);
render(green);
render(red);
render(blue);
render(white);
render(yellow);