const fs = require('fs')
const readline = require('node:readline');
const commandInputan = process.argv[2];
let data = fs.readFileSync('data.json', 'utf8')
let berkas = JSON.parse(data);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Jawaban: '
});

let counterPertanyaan = 0;
let counterSalah = 0;
let arrayTampung = [];

if (commandInputan !== "data.json") {
  console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node challenge#12.js data.json'")
  process.exit(1);
} else {
  console.log(`\nSelamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${commandInputan}'. Untuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`)

}

function listPertanyaan() {
  if (counterPertanyaan < berkas.length) {
    counterSalah = 0;
    console.log(`\nPertanyaan: ${berkas[counterPertanyaan].definition}`)
    rl.prompt();
  } else {
    console.log("Anda Berhasil!")
    process.exit(1);
  }
}

rl.on('line', (line) => {
  if (line == berkas[counterPertanyaan].term || line == berkas[counterPertanyaan].term.charAt(0).toUpperCase() + berkas[counterPertanyaan].term.slice(1) || line == berkas[counterPertanyaan].term.charAt(0).toLowerCase() + berkas[counterPertanyaan].term.slice(1)) {
      counterPertanyaan = counterPertanyaan + 1;
      console.log('Anda Beruntung\n');
      listPertanyaan()
  } else if (line == 'skip') {
    berkas.push(berkas[counterPertanyaan]);
    counterPertanyaan += 1;
    listPertanyaan()
  } else if (line !== berkas[counterPertanyaan].term || line !== berkas[counterPertanyaan].term.charAt(0).toUpperCase() + berkas[counterPertanyaan].term.slice(1) || line !== berkas[counterPertanyaan].term.charAt(0).toLowerCase() + berkas[counterPertanyaan].term.slice(1)) {
      counterSalah += 1
      console.log(`Anda kurang beruntung! anda telah salah ${counterSalah}, silahkan coba lagi.\n`);
      rl.prompt();
  }

});

listPertanyaan()

