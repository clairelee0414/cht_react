class Car{
    constructor(){
        this.speed =0
    }
}
car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)

var car2 ={
    speed:0,
    getSpeed:function(){
        console.log(this.speed)
    },
    getSpeed2:function(){
        setTime(function(){console.log(this.speed)},1000)
    },
    getSpeed3:function(){
        var that = this
        setTime(function(){console.log(this.speed)},1000)
    }
}
car2.speed =888
car2.getSpeed()