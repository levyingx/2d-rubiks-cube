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

    #getFace(code, index) {
        return index.map(i => this.#sides.find(e => e.code == code).array[i]);
    }

    #getSticker(code, index) {
        return this.#sides.find(e => e.code == code).array[index];
    }

    #setSticker(code, index, value) {
        this.#sides.find(e => e.code === code).array[index] = value;
    }

    render() {
        this.#sides.forEach(face => face.render());
    }

    /**
     * @description Clockwise R turn 
     */
    R() {
        const index = [2, 5, 8];
        const cornersIndex = [0, 2, 8, 6];
        const edgesIndex = [1, 5, 7, 3];

        const F = this.#getFace('F', index);
        const U = this.#getFace('U', index);
        const B = this.#getFace('B', index);
        const D = this.#getFace('D', index);
        const R = this.#sides.find(e => e.code == 'R').array;

        for (let i = 0; i < index.length; i++) {
            this.#setSticker('U', index[i], F[i]);
            this.#setSticker('B', index[i], U[i]);
            this.#setSticker('D', index[i], B[i]);
            this.#setSticker('F', index[i], D[i]);
        }

        for (let i = 0; i < cornersIndex.length; i++) {
            this.#setSticker('R', cornersIndex[i % 4], R[cornersIndex[(i + 1) % 4]]);
        }
        
        for (let i = 0; i < edgesIndex.length; i++) {
            this.#setSticker('R', edgesIndex[i % 4], R[cornersIndex[(i + 1) % 4]]);
        }
    }
    /**
     * @description CounterclockR turn 
     */
    RPrime() {
        const index = [2, 5, 8];
        const cornersIndex = [0, 2, 8, 6];
        const edgesIndex = [1, 5, 7, 3];

        const F = this.#getFace('F', index);
        const U = this.#getFace('U', index);
        const B = this.#getFace('B', index);
        const D = this.#getFace('D', index);
        const R = this.#sides.find(e => e.code == 'R').array;

        for (let i = 0; i < index.length; i++) {
            this.#setSticker('U', index[i], B[i]);
            this.#setSticker('F', index[i], U[i]);
            this.#setSticker('D', index[i], F[i]);
            this.#setSticker('B', index[i], D[i]);
        }

        for (let i = cornersIndex.length - 1; i >= 0; i--) {
            this.#setSticker('R', cornersIndex[i % 4], R[cornersIndex[(i - 1 + cornersIndex.length) % 4]]);
        }
        
        for (let i = edgesIndex.length - 1; i >= 0; i--) {
            this.#setSticker('R', edgesIndex[i % 4], R[cornersIndex[(i - 1 + cornersIndex.length) % 4]]);
        }
    }
}

export default Cube;