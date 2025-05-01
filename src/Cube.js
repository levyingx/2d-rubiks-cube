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

    #getFace(code, index) {
        return index.map(i => this.#sides.find(e => e.code == code).array[i]);
    }

    #getSticker(code, index) {
        return this.#sides.find(e => e.code == code).array[index];
    }

    #setSticker(code, index, value) {
        this.#sides.find(e => e.code === code).array[index] = value;
    }

    R() {
        const index = [2, 5, 8];
        const F = this.#getFace('F', index);
        const U = this.#getFace('U', index);
        const B = this.#getFace('B', index);
        const D = this.#getFace('D', index);

        for (let i = 0; i < index.length; i++) {
            this.#setSticker('U', index[i], F[i]);
            this.#setSticker('B', index[i], U[i]);
            this.#setSticker('D', index[i], B[i]);
            this.#setSticker('F', index[i], D[i]);
        }

        const cornersIndex = [0, 2, 8, 6];
        const edgesIndex = [1, 5, 7, 3];
        const R = this.#sides.find(e => e.code == 'R').array;

        this.#setSticker('R', cornersIndex[0], R[cornersIndex[1]]);
        this.#setSticker('R', cornersIndex[1], R[cornersIndex[2]]);
        this.#setSticker('R', cornersIndex[2], R[cornersIndex[3]]);
        this.#setSticker('R', cornersIndex[3], R[cornersIndex[0]]);
        
        this.#setSticker('R', edgesIndex[0], R[edgesIndex[1]]);
        this.#setSticker('R', edgesIndex[1], R[edgesIndex[2]]);
        this.#setSticker('R', edgesIndex[2], R[edgesIndex[3]]);
        this.#setSticker('R', edgesIndex[3], R[edgesIndex[0]]);
    }
}

export default Cube;