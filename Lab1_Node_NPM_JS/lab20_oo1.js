function Car(){
    this.speed =0;
    this.getSpeed = function(){
        return this.speed
    }
}

var myCar = new Car()
console.log(myCar.getSpeed())
myCar.speed = 50
console.log(myCar.getSpeed())

var myCarRun = function(){
    console.log("super fast");
}
myCarRun()

function carRun2(){
    console.log("super fast2");
}
var myCarRun2 =  carRun2();
myCarRun2()