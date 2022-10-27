import { showMahasiswa, interfaceAwal1Controller, showTambahMahasiswa, showJurusan, showTambahMahasiswaJ, showTambahMahasiswaM, dataMahasiswaTabelAdded } from "./controllers/controller.js";
import { interfaceAwal1, interface1Mahasiswa, drawJurusan } from "./views/view.js";
import Table from "cli-table";
import readline from 'readline'
import { cari, deleteMahasiswa, tambahMahasiswa } from "./models/model.js";

let DataLogin = [{ username: "rubi", password: "123", role: "ADMIN" }];

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var selamatDatang = new Table({
    chars: {
        'top': '=', 'top-mid': '', 'top-left': '', 'top-right': ''
        , 'bottom': '=', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': ''
        , 'left': '', 'left-mid': '', 'mid': '', 'mid-mid': ''
        , 'right': '', 'right-mid': '', 'middle': ' '
    },
    style: { 'padding-left': 0, 'padding-right': 0 },
    colWidths: [53, 53]
});

var inputanUserTable = new Table({
    chars: {
        'top': '=', 'top-mid': '', 'top-left': '', 'top-right': ''
        , 'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': ''
        , 'left': '', 'left-mid': '', 'mid': '', 'mid-mid': ''
        , 'right': '', 'right-mid': '', 'middle': ' '
    },
    style: { 'padding-left': 0, 'padding-right': 0 },
    colWidths: [53, 53]

})

inputanUserTable.push([])

selamatDatang.push(
    ['Welcome to Universitas Pendidikan Indonesia\nJl. Setiabudhi No. 255']
);

function awal() {
    console.log(selamatDatang.toString());
    loginUsername()
}

function loginUsername() {
    rl.question('username: ', (namaPengguna) => {
        if (namaPengguna == DataLogin[0].username) {
            loginPassword();
        } else {
            console.log("Username tidak terdaftar")
            loginUsername()
        }
    });
}

function loginPassword() {
    rl.question('password: ', (kunciPengguna) => {
        if (kunciPengguna == DataLogin[0].password) {
            selamatDatang.pop();
            selamatDatang.push(
                [`Welcome, ${DataLogin[0].username}. Your access level is : ${DataLogin[0].role}`])
            console.log(selamatDatang.toString())
            interfaceAwal1Controller()
            inputanUserControllerAwal()
            // showMahasiswa()
        } else {
            console.log("password salah")
            loginPassword()
        }
    });
}

export function Inputan1Mahasiswa() {
    console.log(inputanUserTable.toString())
    rl.question(`Masukan salah satu nomor dari opsi di atas : `, (inputanUser1Mahasiswa) => {
        switch (inputanUser1Mahasiswa) {
            case '1':
                showMahasiswa()
                break;
            case '2':
                inputanCariMahasiswa();
                break;
            case '3':
                console.log("lengkapi data di bawah ini: ")
                showTambahMahasiswa()
                break;
            case '4':
                inputanHapusMahasiswa();
                break;
            case '5':
                interfaceAwal1Controller();
                inputanUserControllerAwal();
                break;
            default:
                console.log("Masukan sesuai nomor yang tersedia di menu")
                interface1Mahasiswa()
                break;
        }
    });
}

export function inputanCariMahasiswa() {
    rl.question(`Masukan NIM Mahasiswa : `, (inputanUserCariMahasiswa) => {
        cari(inputanUserCariMahasiswa)
    });
}

export let arrayTambahMahasiswa = [];

export function inputanTambahMahasiswa() {
    rl.question(`NIM : `, (inputTambahNIM) => {
        arrayTambahMahasiswa.push(inputTambahNIM);
        rl.question(`Nama : `, (inputTambahNama) => {
            arrayTambahMahasiswa.push(inputTambahNama);
            rl.question(`Umur : `, (inputTambahUmur) => {
                arrayTambahMahasiswa.push(inputTambahUmur);
                rl.question(`Alamat : `, (inputTambahAlamat) => {
                    arrayTambahMahasiswa.push(inputTambahAlamat);
                    showTambahMahasiswaJ()
                });
            });
        });
    });
}

export function inputanTambahMahasiswaJ() {
    rl.question(`id jurusan : `, (inputTambahidjurusan) => {
        arrayTambahMahasiswa.push(inputTambahidjurusan);
        showTambahMahasiswaM()
    });
}

export function inputanTambahMahasiswaM() {
    rl.question(`Kode Matkul : `, (inputTambahKM) => {
        arrayTambahMahasiswa.push(inputTambahKM);
        dataMahasiswaTabelAdded()
    });
}

export function inputanHapusMahasiswa() {
    rl.question(`Masukan NIM Mahasiswa : `, (inputanUserHapusMahasiswa) => {
        deleteMahasiswa(inputanUserHapusMahasiswa)
    });
}

export function inputanUserControllerAwal() {
    console.log(inputanUserTable.toString())
    rl.question(`Masukan salah satu nomor dari opsi di atas : `, (inputanUser) => {
        switch (inputanUser) {
            case "1":
                interface1Mahasiswa()
                Inputan1Mahasiswa()
                break;
            case '6':
                loginUsername()
                break;
            default:
                console.log("test")
                break;
        }

    });
}

awal()