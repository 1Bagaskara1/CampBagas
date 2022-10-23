
class Tyre {
    constructor() {
        let Merk = ['achilles', 'Bridgestone', 'Goodyear', 'GT Radial', 'Dunlop']
        let Ukuran = [14, 15, 16, 17]
        this.brand = Merk[Math.floor((Math.random() * 5))];
        this.size = Ukuran[Math.floor((Math.random() * 4))];
    }
}

class Car {
    constructor() {
        this.sn = [(((Math.random() * 10) + 1).toString(36).substring(4))
            , (((Math.random() * 10) + 1).toString(36).substring(8))
            , (((Math.random() * 10) + 1).toString(36).substring(8))
            , (((Math.random() * 10) + 1).toString(36).substring(8))
            , (((Math.random() * 10) + 1).toString(36).substring(2))].join("-").toString()
        this.pintu = '4'
        this.tDuduk = '4'
        this.ban = new Tyre()
        this.garansi = Math.floor((Math.random() * 5) + 1);
    }

}

class LandCruiser extends Car {
    constructor(sn, pintu, tDuduk, ban, garansi) {
        super(sn, pintu, tDuduk, ban, garansi)
        this.model = "Land Cruiser"
    }
}

class Fortuner extends Car {
    constructor(sn, pintu, tDuduk, ban, garansi) {
        super(sn, pintu, tDuduk, ban, garansi)
        this.model = "Fortuner"
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    produce(year) {
        for (let i = 0; i < Math.floor((Math.random() * 12) + 6); i++) {
            this.year = year;
            let randomMobil = Math.floor((Math.random() * 2) + 1)

            if (randomMobil == 1) {
                let mobilbaru = new LandCruiser;
                mobilbaru.year = year;
                this.cars.push(mobilbaru)
            } else {
                let mobilbaru = new Fortuner;
                mobilbaru.year = year;
                this.cars.push(mobilbaru)
            }
        }
    }

    result() {
        for (let i = 0; i < this.cars.length; i++) {
            console.log(`No. ${i + 1}`)
            console.log(`Varian     : ${this.cars[i].model}`)
            console.log(`SN         : ${this.cars[i].sn}`)
            console.log(`Door       : ${this.cars[i].pintu}`)
            console.log(`Seat       : ${this.cars[i].tDuduk} seater`)
            console.log(`Tyre       : ${this.cars[i].ban.brand} ${this.cars[i].ban.size} inch`)
            console.log(`Year       : ${this.cars[i].year}`)
            console.log(`Waranty    : ${this.cars[i].garansi} tahun\n`)
        }
    }

    guaranteeSimulation(simulationYear) {

        console.group(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}\n`)
        for (let i = 0; i < this.cars.length; i++) {
            console.log(`No. ${i + 1}`)
            console.log(`Varian     : ${this.cars[i].model}`)
            console.log(`SN         : ${this.cars[i].sn}`)
            console.log(`Door       : ${this.cars[i].pintu}`)
            console.log(`Seat       : ${this.cars[i].tDuduk} seater`)
            console.log(`Tyre       : ${this.cars[i].ban.brand} ${this.cars[i].ban.size} inch`)
            console.log(`Year       : ${this.cars[i].year}`)
            console.log(`Waranty    : ${this.cars[i].garansi} tahun\n`)
            if (simulationYear > this.cars[i].year + this.cars[i].garansi) {
                console.log(`status on ${simulationYear} this guarantee status is expired\n`)
            } else {
                console.log(`status on ${simulationYear} this guarantee status is active\n`)
            }
        }
    }
}

toyota = new CarFactory();
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)