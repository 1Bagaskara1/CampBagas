import { read } from '../models/model.js'
import { drawMahasiswa, interfaceAwal1 } from '../views/view.js'
// import { aaa } from '../run.js';
// import Table from "cli-table";

export function showMahasiswa() {
    read(function (data) {
        drawMahasiswa(data)
    })
}

export function interfaceAwal1Controller() {
    interfaceAwal1()
    // aaa()
    
}