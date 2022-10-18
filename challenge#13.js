const commandInputan = process.argv[2];
const paramInputan = process.argv
const fs = require('fs')


function ambilFile() {
    let data = fs.readFileSync('Todo.json', 'utf8')
    let parsedData = JSON.parse(data);
    return parsedData;
}

function simpan(data) {
    fs.writeFileSync('Todo.json', JSON.stringify(data, null, 3))
}

function list() {
    let berkas = ambilFile()
    berkas.forEach((hasil, index) => {
        const { tugas, statusKer } = hasil
        console.log(`${index + 1}. ${statusKer ? '[x]' : '[ ]'} ${tugas}`)
    })

}

function task(paramInputan) {
    let berkas = ambilFile()
    paramInputan = process.argv[3]
    // console.log(paramInputan)
    console.log(`tugas: ${berkas[paramInputan - 1].tugas}`)
}

function add(paramInputan) {
    let berkas = ambilFile()
    let tugas = paramInputan;
    let statusKer = false;
    let template = { tugas, statusKer };
    berkas.push(template);
    console.log(`"${paramInputan}" telah ditambahkan.`)
    simpan(berkas)
}
function hapus(paramInputan) {
    let berkas = ambilFile()
    let index = Number(paramInputan - 1)
    console.log(`"${berkas[paramInputan - 1].tugas}" telah dihapus.`)
    berkas.splice(index, 1)
    simpan(berkas)
}
function unCcomplete(paramInputan) {
    let berkas = ambilFile()
    let done = berkas[paramInputan - 1].statusKer;
    berkas[paramInputan - 1].statusKer = !done;
    !berkas[paramInputan - 1].statusKer ? console.log(`"${berkas[paramInputan - 1].tugas}" status selesai dibatalkan.`) : console.log(`"${berkas[paramInputan - 1].tugas}" telah selesai.`)
    simpan(berkas)
}
function outstandingAsc(paramInputan) {
    let berkas = ambilFile()
    console.log("Daftar Pekerjaan")
    for (let i = 0; i < berkas.length; i++) {
        if (berkas[i].statusKer == false) {
            console.log(`${i + 1}. [ ] ${berkas[i].tugas}`)
        }
    }
}
function completedAsc(paramInputan) {
    let berkas = ambilFile()
    console.log("Daftar Pekerjaan")
    for (let i = 0; i < berkas.length; i++) {
        if (berkas[i].statusKer == true) {
            console.log(`${i + 1}. [x] ${berkas[i].tugas}`)
        }
    }
}

function tagTugas(namaTag, nomorTugas) {
    let berkas = ambilFile()
    console.log(`Tag "${namaTag}" telah ditambahkan ke daftar "${berkas[nomorTugas - 1].tugas}"`);
    berkas[nomorTugas - 1].tag = namaTag.split(",");
    simpan(berkas)
}

function filterTag(filterNama) {
    let berkas = ambilFile()
    // console.log(berkas[2].tag[0])
    for (let i = 0; i < berkas.length; i++) {
        for (let j = 0; j < berkas.length; j++) {
            if (berkas[i].tag[j] == filterNama[1]) {
                console.log(`${i + 1}. ${berkas[i].statusKer ? '[x]' : '[ ]'} ${berkas[i].tugas}`)
            }
        }
        // console.log(filterNama[1])
    }
}
    if (commandInputan == "list") {
        list()
    } else if (commandInputan == "task") {
        task(paramInputan)
    } else if (commandInputan == "add") {
        let task = paramInputan.slice(3).join(" ");
        add(task)
    } else if (commandInputan == "delete") {
        hapus(paramInputan[3])
    } else if (commandInputan == "complete") {
        let selesai = paramInputan.slice(3).join(" ");
        unCcomplete(selesai)
    } else if (commandInputan == "uncomplete") {
        let belumSelesai = paramInputan.slice(3).join(" ");
        unCcomplete(belumSelesai)
    } else if (commandInputan == "list:outstanding") {
        outstandingAsc()
    } else if (commandInputan == "list:completed") {
        completedAsc()
    } else if (commandInputan == "tag") {
        let namaTag = paramInputan.slice(4).join(",");
        let nomorTugas = process.argv[3]
        tagTugas(namaTag, nomorTugas)
    } else if (commandInputan == undefined) {
        console.log(">>> JS TODO <<<");
        console.log("$node challenge#13.js list");
        console.log("$node challenge#13.js task <task_id>")
        console.log("$node challenge#13.js add <task_content>")
        console.log("$node challenge#13.js delete <task_id>")
        console.log("$node challenge#13.js complete <task_id>")
        console.log("$node challenge#13.js uncomplete <task_id>")
        console.log("$node challenge#13.js list:outstanding asc|desc")
        console.log("$node challenge#13.js list:completed asc|desc")
        console.log("$node challenge#13.js tag <task_id> <tag_name1> <tag_name_2> ... <tag_name_N>")
        console.log("$node challenge#13.js filter:<tag_name>")
    } else if (commandInputan.slice(0, 6) == "filter") {
        let filterNama = process.argv[2].split(":")
        filterTag(filterNama)
    }