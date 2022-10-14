function pola(sentence) {
    //write your code here
    pengganti = "x"
    pengganti2 = "x1"
    angka = sentence.replace(/#/g, pengganti)
    angka2 = angka.replace(/[=*]/g, "")
    myArray = angka2.split("  ")
    newArray = myArray[2].replace(pengganti, pengganti2)
    // myArray = myArray[2].replace('x', pengganti2)
    myArray.splice(2,1,newArray)

    for (let i = 0; i < myArray.length; i++) {
        for (let j = 1; j < myArray.length; j++) {
            myArray[i] = myArray[i].replace(pengganti,i)
            let k = j - 2
            myArray[j] = myArray[j].replace(pengganti2,k)
        }

    }
    console.log(myArray)
}

// sentence = "4213 * 188 = 801204"
// myArray = sentence.split(" ")
// console.log(myArray);
console.log(pola("42#3 * 188 = 80#204"))