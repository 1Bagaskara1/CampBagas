import sqlite3 from 'sqlite3'
import path from 'path'
import { arrayTambahMahasiswa, Inputan1Mahasiswa, inputanCariMahasiswa } from '../run.js';
import { interface1Mahasiswa, tulisCariMahasiswa } from '../views/view.js';

const pathDB = path.join(path.resolve(), 'db', 'university.db')
const db = new sqlite3.Database(pathDB);

export function read(callback) {
    db.all('SELECT * FROM Mahasiswa;', (err, rows) => {
        if (err) return console.log('gagal ambil data', err);
        callback(rows)
    })
}

export function readJurusan(callback) {
    db.all('SELECT * FROM Jurusan;', (err, rows) => {
        if (err) return console.log('gagal ambil data', err);
        callback(rows)
    })
}

export function readMataKuliah(callback) {
    db.all('SELECT KodeMatkul, NamaMatkul FROM Mata_Kuliah;', (err, rows) => {
        if (err) return console.log('gagal ambil data', err);
        callback(rows)
    })
}

export function cari(inputanUserCariMahasiswa) {
    db.all(`SELECT * FROM Mahasiswa WHERE NIM = '${inputanUserCariMahasiswa}';`, (err, rows) => {
        if (rows[0] == err) {
            console.log(`Mahasiwa dengan NIM ${inputanUserCariMahasiswa}, tidak terdaftar`);
            interface1Mahasiswa()
            Inputan1Mahasiswa()
        } else {
            tulisCariMahasiswa(rows)
            interface1Mahasiswa()
            Inputan1Mahasiswa()
        }
    })
}

export function tambahMahasiswa() {
    db.run(`INSERT INTO Mahasiswa VALUES ('${arrayTambahMahasiswa[arrayTambahMahasiswa.length - 6]}'
    ,'${arrayTambahMahasiswa[arrayTambahMahasiswa.length - 5]}'
    ,'${arrayTambahMahasiswa[ arrayTambahMahasiswa.length - 4]}'
    ,'${arrayTambahMahasiswa[arrayTambahMahasiswa.length - 3]}'
    ,'${arrayTambahMahasiswa[arrayTambahMahasiswa.length - 2]}'
    ,'${arrayTambahMahasiswa[arrayTambahMahasiswa.length - 1]}')`)
}

export function deleteMahasiswa(inputanHapusMahasiswa) {
    db.run(`DELETE FROM Mahasiswa WHERE NIM = '${inputanHapusMahasiswa}';`)
    console.log(`Data mahasiswa dengan NIM ${inputanHapusMahasiswa}, telah dihapus.`)
    interface1Mahasiswa()
    Inputan1Mahasiswa()
}