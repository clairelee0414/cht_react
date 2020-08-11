function Car(){

}
Car.prototype.speed =0;
Car.prototype.getSpeed = function(){
    return this.speed
}
Car.prototype.setSpeed = function(){
    this.speed = speed
}

var myCar = new Car()
console.log(myCar.getSpeed())
myCar.speed = 50
console.log(myCar.getSpeed())

var myCarRun = function(){
    console.log("super fast");
}
myCarRun()
