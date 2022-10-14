function spiral(param1) {
    //your code here
    const inputNilai = param1;
    let array = []
    let arraySpiral = [];
    let param2 = 0
 
    for (i = 0; i < param1 * param1; i++) {
        // for (j = 0; j < param1; j++)
        array.push(i)
    }
    // return console.log(array)
    for (j = 0; j < param1 - 1; j++) {
        arraySpiral.push(array[j])
    }
    // return console.log(arraySpiral);
    for (a = 0; a < param1 - 1; a++) {
        param2 +=  array[param1]
        arraySpiral.push(array[param2 - 1])
    }
    // return console.log(arraySpiral)
    for (a = 1; a < param1; a++) {
        arraySpiral.push(array[(param1*param1) - a])
    }
    // return console.log(arraySpiral)
    // return console.log(array)
    for (a = 1; a < param1 - 1; a++) {
        arraySpiral.push(array[(param1 * (param1 - a))])
    }
    // return console.log(arraySpiral)
    for (a = 0; a <= param1 - 2; a++) {
        arraySpiral.push(array[(param1 + a)])
    }
    // return console.log(arraySpiral)
    return console.log(arraySpiral)
}

(spiral(5));
// (spiral(6));