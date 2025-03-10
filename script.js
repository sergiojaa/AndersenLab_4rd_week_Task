class Calculator {
    constructor(number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number' || !isFinite(number1) || !isFinite(number2)) {
            throw new Error('Please Enter Valid Numbers Bro')
        }
        this.number1 = number1;
        this.number2 = number2

    }
    validNumber(number) {
        return typeof number === 'number' && isFinite(number)
    }
    setX(number1) {
        if (!this.validNumber(number1)) {
            throw new Error('Invalid setX number')
        }
        this.number1 = number1
    }
    setY(number2) {
        if (!this.validNumber(number2)) {
            throw new Error('Invalid setY number')
        }
        this.number2 = number2
    }
    logSum() {
        return this.number1 + this.number2
    }
    logMul() {
        return this.number1 * this.number2
    }
    logSub() {
        return Math.abs(this.number1 - this.number2)
    }
    logDiv() {
        if (this.number2 === 0) {
            throw new Error('Cannot Divide 0')
        }
        return this.number1 / this.number2
    }
}
const cal = new Calculator(20, 2)
const logSumRef = cal.logSum.bind(cal);
const logMulRef = cal.logMul.bind(cal);
const logSubRef = cal.logSub.bind(cal);
const logDivRef = cal.logDiv.bind(cal);
console.log(logDivRef())
console.log(cal.logDiv())