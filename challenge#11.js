const fs = require('fs')
const readline = require('node:readline');
let data = fs.readFileSync('data.json', 'utf8')
let berkas = JSON.parse(data);

console.log("Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n")

let counterPertanyaan = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});

async function Kuis() {

    if (counterPertanyaan < berkas.length) {
        console.log(`Pertanyaan: ${berkas[counterPertanyaan].definition}`);
        rl.prompt();
        rl.on('line', (line) => {
            if (line == berkas[counterPertanyaan].term || line == berkas[counterPertanyaan].term.charAt(0).toUpperCase() + berkas[counterPertanyaan].term.slice(1) || line == berkas[counterPertanyaan].term.charAt(0).toLowerCase() + berkas[counterPertanyaan].term.slice(1)) {
                counterPertanyaan = counterPertanyaan + 1;
                console.log('Selamat Anda Benar!\n');
                Kuis();
            } else {
                console.log(`Wkwkwkwk, Anda kurang beruntung!\n`);
                rl.prompt();
            }

        });

    } else {
        console.log("Hore Anda Menang!")
        process.exit(1);
    }
}

Kuis()

                // switch (line.trim()) {
                //     case (berkas[counterPertanyaan].term):
                //         counterPertanyaan = counterPertanyaan + 1;
                //         console.log('Selamat Anda Benar!\n');
                //         Kuis();
                //         break;
                //     case (berkas[counterPertanyaan].term.charAt(0).toUpperCase() + berkas[counterPertanyaan].term.slice(1)):
                //         ccounterPertanyaan = counterPertanyaan + 1;
                //         console.log('Selamat Anda Benar!\n');
                //         Kuis();
                //         break;
                //     case (berkas[counterPertanyaan].term.charAt(0).toLowerCase() + berkas[counterPertanyaan].term.slice(1)):
                //         counterPertanyaan = counterPertanyaan + 1;
                //         console.log('Selamat Anda Benar!\n');
                //         Kuis();
                //         break;
                //     default:
                //         console.log(`Wkwkwkwk, Anda kurang beruntung!\n`);
                //         // return 0;