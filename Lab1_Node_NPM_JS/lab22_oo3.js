function Car(){

}
Car.prototype.speed =0;
Car.prototype.getSpeed = function(){
    return this.speed
}
Car.prototype.setSpeed = function(){
    this.speed = speed
}

function HybridCar(){

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__=Car.prototype
HybridCar.prototype.batteryLimit = 50000

var myCar = new HybridCar()
console.log(myCar.getSpeed())
myCar.speed = 50
console.log(myCar.getSpeed())
console.log(myCar.batteryLimit)

