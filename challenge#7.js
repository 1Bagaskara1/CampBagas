function weirdMultiply(input) {
    //write your code here
    let number = input.toString()
    let number2 = 1
    for (i = 0; i < number.length; i++) {
        j = 0
        number2 *= number[i]
    }
    // return number2.toString().length
    if (number2.toString().length == 1) {
        return true, number2
    } else {
        return weirdMultiply(number2)
    }

}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
console.log(weirdMultiply(278))

