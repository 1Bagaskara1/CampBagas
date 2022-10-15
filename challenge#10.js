const fs = require('fs')

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu di sini > '
});

rl.prompt();

rl.on('line', function sentencesManipulation(sentence) {
    let myArray = [];
    myArray = arguments[0].split(" ");
    let arrayGabungan = [];
    for (let i = 0; i < myArray.length; i++) {
        let j = 0;
        if (myArray[i][j] == 'a' || myArray[i][j] == 'i' || myArray[i][j] == 'u' || myArray[i][j] == 'e' || myArray[i][j] == 'o') {

            arrayGabungan.push(`${myArray[i]}`)
            break
        } else {

            arrayGabungan.push(myArray[i].substr(1) + myArray[i][j] + "nyo")
        }
    }
    console.log(`hasil konversi: ${arrayGabungan.join(" ")}`)
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});