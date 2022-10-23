const PI = 22 / 7;

class Calculator {
    constructor() {
        this.nilaiAwal = 1;
        this.x = null;
    }

    add(value) {
        if (this.nilaiAwal == 1) {
            this.value = value + this.nilaiAwal;
            this.nilaiAwal = 0;
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
        this.value = Math.pow(this.x, value)
        return this
    }

    square() {
        this.value = Math.pow(this.x, 2)
        return this
    }

    result() {
        console.log(this.value)
        return this
    }
}

export { Calculator, PI };