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

function filterTag() {

}

// if(commandInputan.slice(0,6) == "filter") {
//     console.log(commandInputan);
// }

switch (commandInputan) {
    case "list":
        list()
        break;
    case "task":
        task(paramInputan)
        // console.log(paramInputan)
        break;
    case "add":
        let task = paramInputan.slice(3).join(" ");
        add(task)
        break;
    case "delete":
        hapus(paramInputan[3])
        break;
    case "complete":
        let selesai = paramInputan.slice(3).join(" ");
        unCcomplete(selesai)
        break;
    case "uncomplete":
        let belumSelesai = paramInputan.slice(3).join(" ");
        unCcomplete(belumSelesai)
        break;
    case "list:outstanding":
        outstandingAsc()
        break;
    case "list:completed":
        completedAsc()
        break;
    case "tag":
        let namaTag = paramInputan.slice(4).join(",");
        let nomorTugas = process.argv[3]
        tagTugas(namaTag, nomorTugas)
        break;
    case commandInputan.slice(0,6) == "filter":
        let filterTag = process.argv[2].split(":")
        console.log(filterTag)
        break;
    default:
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
        break;
}