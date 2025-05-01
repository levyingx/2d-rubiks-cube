import Face from './Face';
import './cube.css';

class Cube {
    #sides;

    constructor() {
        this.#sides = [
            new Face('R', 'red'),
            new Face('F', 'green'),
            new Face('B', 'blue'),
            new Face('U', 'white'),
            new Face('D', 'yellow'),
            new Face('L', 'orange')
        ];        
    }

    render() {
        this.#sides.forEach(face => face.render());
    }

    R() {
        // do R according to F orientation

        // F[2, 5, 8] go to U[2, 5, 8]
        // U[2, 5, 8] go to B[2, 5, 8]
        // B[2, 5, 8] go to D[2, 5, 8]
        // D[2, 5, 8] go to F[2, 5, 8]

        // create a copy of each piece
        const index = [2, 5, 8];
        const F = index.map(i => this.#sides.find(e => e.code == 'F').array[i]);
        const U = index.map(i => this.#sides.find(e => e.code == 'U').array[i]);
        const B = index.map(i => this.#sides.find(e => e.code == 'B').array[i]);
        const D = index.map(i => this.#sides.find(e => e.code == 'D').array[i]);
        const R = this.#sides.find(e => e.code == 'R').array;

        // F[2, 5, 8] go to U[2, 5, 8]
        this.#sides.find(e => e.code == 'U').array[index[0]] = F[0];
        this.#sides.find(e => e.code == 'U').array[index[1]] = F[1];
        this.#sides.find(e => e.code == 'U').array[index[2]] = F[2];
        // U[2, 5, 8] go to B[2, 5, 8]
        this.#sides.find(e => e.code == 'B').array[index[0]] = U[0];
        this.#sides.find(e => e.code == 'B').array[index[1]] = U[1];
        this.#sides.find(e => e.code == 'B').array[index[2]] = U[2];
        // B[2, 5, 8] go to D[2, 5, 8]
        this.#sides.find(e => e.code == 'D').array[index[0]] = B[0];
        this.#sides.find(e => e.code == 'D').array[index[1]] = B[1];
        this.#sides.find(e => e.code == 'D').array[index[2]] = B[2];
        // D[2, 5, 8] go to F[2, 5, 8]
        this.#sides.find(e => e.code == 'F').array[index[0]] = D[0];
        this.#sides.find(e => e.code == 'F').array[index[1]] = D[1];
        this.#sides.find(e => e.code == 'F').array[index[2]] = D[2];

        const cornersIndex = [0, 2, 6, 8];
        const edgesIndex = [1, 3, 5, 7];

        // rotate corners
        this.#sides.find(e => e.code == 'R').array[0] = R[2];
        this.#sides.find(e => e.code == 'R').array[2] = R[8];
        this.#sides.find(e => e.code == 'R').array[8] = R[6];
        this.#sides.find(e => e.code == 'R').array[6] = R[0];
        // rotate edges
        this.#sides.find(e => e.code == 'R').array[1] = R[5];
        this.#sides.find(e => e.code == 'R').array[5] = R[7];
        this.#sides.find(e => e.code == 'R').array[7] = R[3];
        this.#sides.find(e => e.code == 'R').array[3] = R[1];      
    }
}

export default Cube;