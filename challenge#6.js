function sentencesManipulation(sentence) {
    //write your code here
    let myArray = [];
    let myArray2 = [];
    myArray = arguments[0].split(" ");
    let arrayGabungan = [];
    // console.log(myArray)
    for (let i = 0; i < myArray.length; i++) {
        let j = 0;
        if (myArray[i][j] == 'a' || myArray[i][j] == 'i' || myArray[i][j] == 'u' || myArray[i][j] == 'e' || myArray[i][j] == 'o') {

            arrayGabungan.push(myArray[i])
        } else {

            arrayGabungan.push(myArray[i].substr(1) + myArray[i][j] + "nyo")
        }
    }
    // console.log(arrayGabungan)
    // console.log(arrayGabungan2[1])
    console.log(arrayGabungan.join(" "))
}

sentencesManipulation('ibu pergi ke pasar bersama aku');
sentencesManipulation('ayam pulang ke kadang ikan');


