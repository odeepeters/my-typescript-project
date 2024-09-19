var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of Car
var myCar = new Car("Toyota", "Camry", 2021);
myCar.start(); // Logs: "Car engine started"
