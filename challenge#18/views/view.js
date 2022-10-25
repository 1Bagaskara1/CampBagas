import Table from 'cli-table';

export function drawMahasiswa(rows) {
var tabelMahasiswa = new Table({
    head: ['No.','NIM', 'Nama Mahasiswa', 'Umur', 'Alamat', 'ID Jurusan']
  , colWidths: [5, 15, 25, 15, 10, 15]
});

    rows.forEach((item, index) => {
        tabelMahasiswa.push([index + 1, item.NIM, item.NamaMahasiswa, item.umur, item.Alamat, item.idjurusan])
    })

    console.log(tabelMahasiswa.toString())
}

export function interfaceAwal1() {
    console.log("\nSilahkan pilih opsi di bawah ini :")
    console.log("[1] Mahasiswa")
    console.log("[2] Jurusan")
    console.log("[3] Dosen")
    console.log("[4] Mata Kuliah")
    console.log("[5] Kontrak")
    console.log("[6] Keluar\n")
}