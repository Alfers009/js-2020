class Car{
    //prpoprietatile clasei:
    model;
    color;
    maxSpeed;
    horsePower;
    handling;
    //constructor(creaza o instanta a clasei - un obiesct)
    constructor(model, color,maxSpeed, horsePower, handling){
        this.validateMaxSpeed(maxSpeed)
        //TODO:Sa validam si ceilalti parametrii


        //this reprezinta obiectul curent 
        this.model = model 
        this.color = color
        this.maxSpeed =maxSpeed
        this.horsePower = horsePower
        this.handling = handling 
    }
    validateMaxSpeed(maxSpeed)  {
        if(maxSpeed < 0||maxSpeed > 300){
            //aruncam o eroare in cazul in care maxspeeddespaseste limetele
            throw 'MaxSpeed is invalid'
        }

    }
    
}

let apple = new Car('titanium','white', 150, 95, 'handling','easy')

console.log(apple)