import { read } from '../models/model.js'
import { drawMahasiswa, interfaceAwal1 } from '../views/view.js'
import { interface1Mahasiswa } from '../views/view.js'
import { Inputan1Mahasiswa } from '../run.js';
// import Table from "cli-table";

export function showMahasiswa() {
    read(function (data) {
        drawMahasiswa(data)
        interface1Mahasiswa()
        Inputan1Mahasiswa()
    })
}

export function interfaceAwal1Controller() {
    interfaceAwal1()
    // aaa()
    
}