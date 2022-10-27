import Table from 'cli-table';

var interface1MahasiswaTable = new Table({
    chars: {
        'top': '=', 'top-mid': '', 'top-left': '', 'top-right': ''
        , 'bottom': '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': ''
        , 'left': '', 'left-mid': '', 'mid': '', 'mid-mid': ''
        , 'right': '', 'right-mid': '', 'middle': ' '
    },
    style: { 'padding-left': 0, 'padding-right': 0 },
    colWidths: [53, 53]

})

interface1MahasiswaTable.push([])

export function drawMahasiswa(rows) {
var tabelMahasiswa = new Table({
    head: ['No.','NIM', 'Nama Mahasiswa', 'Umur', 'Alamat', 'ID Jurusan', 'Kode Matkul']
  , colWidths: [5, 15, 25, 15, 10, 15, 15]
});

    rows.forEach((item, index) => {
        tabelMahasiswa.push([index + 1, item.NIM, item.NamaMahasiswa, item.umur, item.Alamat, item.idjurusan, item.KodeMatkul])
    })

    console.log(tabelMahasiswa.toString())
}

export function tulisCariMahasiswa(rows) {
    rows.forEach((item, index) => {
        console.log(`\n${interface1MahasiswaTable.toString()}`)
        console.log(`Detail mahasiswa dengan NIM '${item.NIM}'`)
        console.log(`NIM     : ${item.NIM}`)
        console.log(`Nama    : ${item.NamaMahasiswa}`)
        console.log(`Alamat  : ${item.Alamat}`)
        console.log(`Jurusan : ${item.idjurusan}\n`)

    })
    
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

export function interface1Mahasiswa() {
    console.log(`\n${interface1MahasiswaTable.toString()}`)
    console.log("\nSilahkan pilih opsi di bawah ini :")
    console.log("[1] Daftar Mahasiswa")
    console.log("[2] Cari Mahasiswa")
    console.log("[3] Tambah Mahasiswa")
    console.log("[4] Hapus Mahasiswa")
    console.log("[5] Kembali\n")
}