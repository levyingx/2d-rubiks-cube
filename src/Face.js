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

        for (let i = 0; i < this.array.length; i++) {
            const sticker = document.createElement('div');
            sticker.className = 'cube-sticker';
            sticker.style.backgroundColor = this.array[i];
            // sticker.textContent = i;
            element.appendChild(sticker);
        }

        document.getElementById(`cube`).appendChild(element);
    }
}

export default Face;