console.log("Welcome to tutorial 27 of JS");
// Object literal for creating objects
let car = {
    name: 'Maruti 800',
    topspeed: 89,
    run: function () {
        console.log("the car is running");
    }
}

// we have seen constructor early
// new Date()

// Creating a constructor of cars
// this is like a template which is used to create General Car objects
function GeneralCar(givenname, givenspeed) {
    this.name = givenname;
    this.topspeed = givenspeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topspeed} Kmph than Mercedez`);
    }
}

car1 = new GeneralCar('LandRover', 300);
car2 = new GeneralCar('Maruti Suzuki alto', 100);
console.log(car2);