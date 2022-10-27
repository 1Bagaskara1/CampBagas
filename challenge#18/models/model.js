import sqlite3 from 'sqlite3'
import path from 'path'
import {Inputan1Mahasiswa, inputanCariMahasiswa } from '../run.js';
import { interface1Mahasiswa, tulisCariMahasiswa } from '../views/view.js';

const pathDB = path.join(path.resolve(), 'db', 'university.db')
const db = new sqlite3.Database(pathDB);

export function read(callback) {
    db.all('SELECT * FROM Mahasiswa;', (err, rows) => {
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
    // console.log(`SELECT * FROM Mahasiswa WHERE NIM = '${inputanUserCariMahasiswa}';`)
}

export function tambahMahasiswa() {
    db.all(``)
}
