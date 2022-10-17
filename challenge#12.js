const fs = require('fs')
const readline = require('node:readline');
const commandInputan = process.argv[2];
let data = fs.readFileSync('data.json', 'utf8')
let data2 = fs.readFileSync('math.json', 'utf8')
let berkas = JSON.parse(data);
let berkas2 = JSON.parse(data2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Jawaban: '
});

let counterPertanyaan = 0;
let counterSalah = 0;

if (commandInputan == "data.json") {
  console.log(`\nSelamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${commandInputan}'. Untuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`)
  listPertanyaan()
} else if (commandInputan == "math.json") {
  console.log(`\nSelamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${commandInputan}'. Untuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`)
  listPertanyaanMtk()
} else {
  console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node challenge#12.js data.json atau node challenge#12.js math.json'")
  process.exit(1);

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
  if (commandInputan == "data.json") {
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
  } else if (commandInputan == "math.json") {
      if (line == berkas2[counterPertanyaan].term || line == berkas2[counterPertanyaan].term.charAt(0).toUpperCase() + berkas2[counterPertanyaan].term.slice(1) || line == berkas2[counterPertanyaan].term.charAt(0).toLowerCase() + berkas2[counterPertanyaan].term.slice(1)) {
      counterPertanyaan = counterPertanyaan + 1;
      console.log('Anda Beruntung\n');
      listPertanyaanMtk()
  } else if (line == 'skip') {
    berkas2.push(berkas2[counterPertanyaan]);
    counterPertanyaan += 1;
    listPertanyaanMtk()
  } else if (line !== berkas2[counterPertanyaan].term || line !== berkas2[counterPertanyaan].term.charAt(0).toUpperCase() + berkas2[counterPertanyaan].term.slice(1) || line !== berkas2[counterPertanyaan].term.charAt(0).toLowerCase() + berkas2[counterPertanyaan].term.slice(1)) {
      counterSalah += 1
      console.log(`Anda kurang beruntung! anda telah salah ${counterSalah}, silahkan coba lagi.\n`);
      rl.prompt();
  }
  }

});

function listPertanyaanMtk() {
  if (counterPertanyaan < berkas2.length) {
    counterSalah = 0;
    console.log(`\nPertanyaan: ${berkas2[counterPertanyaan].definition}`)
    rl.prompt();
  } else {
    console.log("Anda Berhasil!")
    counterPertanyaan = 0
    process.exit(1);
  }
}

