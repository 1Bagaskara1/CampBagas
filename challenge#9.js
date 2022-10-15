function spiral(param1) {
    //your code here
    let arrayPolosan = []
    let matrix = []
    let isi = -1;
    let arrayHasil = [];
    let barisAwal = 0;
    let kolomAwal = 0;
    let barisAkhir = param1 - 1;
    let KolomAkhir = param1 - 1;

    for (let i = 0; i < param1 * param1; i++) {
        arrayPolosan.push(i)
    }
    // return console.log(arrayPolosan);
    for (let a = 0; a < param1; a++) {
        matrix.push([])
        for (let b = 0; b < param1; b++) {
            matrix[a][b] = isi += +1;
        }
    }
    // return console.log(matrix);
    while (kolomAwal <= KolomAkhir && barisAwal <= barisAkhir) {
        for (let i = kolomAwal; i <= KolomAkhir; i++) {
            arrayHasil.push(matrix[barisAwal][i])
        }
        barisAwal++
        for (let i = barisAwal; i <= barisAkhir; i++) {
            arrayHasil.push(matrix[i][KolomAkhir])
        }
        KolomAkhir--
        for (let i = KolomAkhir; i >= kolomAwal; i--) {
            arrayHasil.push(matrix[barisAkhir][i])
        }
        barisAkhir--
        for (let i = barisAkhir; i >= barisAwal; i--) {
            arrayHasil.push(matrix[i][kolomAwal])
        }
        kolomAwal++
    }
    
    return console.log(arrayHasil)
}

spiral(5);
spiral(6);
spiral(7);