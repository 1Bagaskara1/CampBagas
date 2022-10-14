function pola(sentence) {
    //write your code here
    pengganti = "x"
    pengganti2 = "y"
    angka = sentence.replace(/#/g, pengganti)
    angka2 = angka.replace(/[=*]/g, "")
    myArray = angka2.split("  ")
    newArray = myArray[2].replace(pengganti, pengganti2)
    myArray.splice(2, 1, newArray)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (myArray[0].replace(pengganti, i) * myArray[1] == myArray[2].replace(pengganti2, j)) {
                return ([i,j]);
            }
        }
    }
}
console.log(pola("42#3 * 188 = 80#204"))
console.log(pola("8#61 * 895 = 78410#5"))