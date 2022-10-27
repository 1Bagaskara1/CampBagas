import { read, readJurusan, readMataKuliah, tambahMahasiswa } from '../models/model.js'
import { drawJurusan, drawMahasiswa, drawMataKuliah, interfaceAwal1 } from '../views/view.js'
import { interface1Mahasiswa } from '../views/view.js'
import { arrayTambahMahasiswa, Inputan1Mahasiswa, inputanTambahMahasiswa, inputanTambahMahasiswaJ, inputanTambahMahasiswaM } from '../run.js';
// import Table from "cli-table";

export function showMahasiswa() {
    read(function (data) {
        drawMahasiswa(data)
        interface1Mahasiswa()
        Inputan1Mahasiswa()
    })
}

export function showJurusan() {
    readJurusan(function (data) {
        drawJurusan(data)
    })
}

export function showMataKuliah() {
    readMataKuliah(function (data) {
        drawMataKuliah(data)
    })
}

export function interfaceAwal1Controller() {
    interfaceAwal1()
}

export function showTambahMahasiswa() {
    read(function (data) {
        drawMahasiswa(data)
        inputanTambahMahasiswa()
    })
}

export function showTambahMahasiswaJ() {
    readJurusan(function (data) {
        drawJurusan(data)
        inputanTambahMahasiswaJ()
    })
}

export function showTambahMahasiswaM() {
    readMataKuliah(function (data) {
        drawMataKuliah(data)
        inputanTambahMahasiswaM()
    })
}

export function dataMahasiswaTabelAdded() {
    tambahMahasiswa()
    read(function (data) {
        console.log("Mahasiswa telah ditambahkan.")
        drawMahasiswa(data)
        interface1Mahasiswa()
        Inputan1Mahasiswa()
    })
}

export function dataMahasiswaDeleted() {
    read(function (data) {
        drawMahasiswa(data)
    })
}