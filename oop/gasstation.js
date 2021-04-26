class GenericGasstation {
    //clasa GenericGasstation este numita clasa abstracta
    //metoda filltank este numita metoda abstracta 
    //reprezinta un contract pe care il vor respecta toate clasele ce o extind 
    // de aceea se numeste polimorfica
    fillTank(car){}
}

class ShellGasstation extends GenericGasstation {
    fillTank(car){
        car.tank = car.maxTank
    }
}

class FakeGasstation extends GenericGasstation {
    fillTank(car) {
        car.tank = car.maxTank - 10
    }
}

class  car {
    tank = 0
    maxTank
    constructor(tank, maxTank) {
        this.maxTank = maxTank
    }
    fillTankTo(station) {
        station.fillTank(this)
    }
}

let station1 = new ShellGasstation()
let station2 = new FakeGasstation()
let ferrari = new Car(100)

ferrari.fillTankTo(station1)