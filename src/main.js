import './style.css'
import Cube from './Cube';

const cube = new Cube();

setInterval(() => {
    cube.RPrime();
    cube.render();
}, 1000);