const PI = 22 / 7;

class Calculator {
    constructor() {
        this.nilaiAwal = null;
        this.x = null;
    }

    add(value) {
        if (this.nilaiAwal == null) {
            this.nilaiAwal = 1;
            this.value = value + this.nilaiAwal;
            return this
        } else {
            this.value += value;
            return this
        }
    }

    substract(value) {
        this.value = this.value - value;
        return this;
    }

    divide(value) {
        this.value = this.value / value;
        return this

    }

    multiply(value) {
        if (this.x == null) {
            this.value = this.value * value;
            return this
        } else if (this.x !== null && value !== PI) {
            this.value = value * this.x;
            return this
        }
        if (value == PI) {
            this.value = this.value * value
        }
        return this
    }
    squareRoot() {
        this.value = Math.sqrt(this.value)
        return this
    }

    exponent(value) {
        this.value = 1;
        for (let i = 0; i < value; i++) {
            this.value = this.value * this.x
        }
        return this
    }

    square() {
        this.value = this.x * this.x
        return this
    }

    result() {
        console.log(this.value)
        return this
    }
}

export { Calculator, PI };