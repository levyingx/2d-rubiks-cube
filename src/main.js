import './style.css'

const red = {name: 'red', array: Array(9).fill('red')};
const green = {name: 'green', array: Array(9).fill('green')};
const blue = {name: 'blue', array: Array(9).fill('blue')};
const white = {name: 'white', array: Array(9).fill('white')};
const yellow = {name: 'yellow', array: Array(9).fill('yellow')};
const orange = {name: 'orange', array: Array(9).fill('orange')};

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
  
}

render(orange);
render(green);
render(red);
render(blue);
render(white);
render(yellow);