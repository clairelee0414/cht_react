code
mkdir temp
git clone YOUR_URL
new window

lab19_iteration.js

var chosen = [1, 2, 3, 4, 5, 6, 8, 10]
for (var index in chosen) {
    console.log('index=', index, ', value=', chosen[index])
}
for (var item of chosen){
    console.log('value=', item)
}
~~~~~~~~~~~~~~~
var chosen = [1, 2, 3, 4, 5, 6, 8, 10]
for (var index in chosen) {
    console.log('index=', index, ', value=', chosen[index])
}
for (var item of chosen) {
    console.log('value=', item)
}
var stores = ['7-11', 'fami', 'OK', 'hi-life']
for (index in stores) {
    console.log(`index=${index}, value=${stores[index]}`)
}

var dict1 = { name: 'Mark', role: "R&D", age: 43 }
for (index in dict1) {
    console.log(index, dict1[index])
}

lab20_oo1.js

function Car() {
    this.speed = 0
    this.getSpeed = function () {
        return this.speed
    }
}
var myCar = new Car()
console.log(myCar.getSpeed())
myCar.speed=50
console.log(myCar.getSpeed())
~~~~~~~~~~~~~~~~~~~~~~~~~~
function Car() {
    this.speed = 0
    this.getSpeed = function () {
        return this.speed
    }
}
var myCarRun = function() {
    console.log("super fast");
}
var myCar = new Car()
myCarRun()
console.log(myCar.getSpeed())
myCar.speed=50
console.log(myCar.getSpeed())
~~~~~~~~~~~~~~~~~
function Car() {
}
Car.prototype.speed = 0
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function(speed){
    Car.prototype.speed = speed
}
var myCarRun = function() {
    console.log("super fast");
}
var myCar = new Car()
myCarRun()
console.log(myCar.getSpeed())
myCar.setSpeed(50)
console.log(myCar.getSpeed())
~~~~~~~~~~~~~~~~~~~~~~~~~~
function Car() {
}
Car.prototype.speed = 0
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function(speed){
    Car.prototype.speed = speed
}
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 50000

var myCar = new HybridCar()
console.log(myCar.getSpeed())
myCar.setSpeed(50)
console.log(myCar.getSpeed())
console.log(myCar.batteryLimit)

https://chrome.google.com/webstore/detail/scratch-js/alploljligeomonipppgaahpkenfnfkn?hl=zh-TW

class Car {
    constructor() {
        this.speed = 0
    }
}
car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)
~~~~~~~~~~~~~~~~~~~~~~
class Car {
    constructor() {
        this.speed = 0
    }
}
car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)

var car2 = {
    speed:0,
    getSpeed: function() {
        console.log(this.speed)
    }
}
car2.speed = 888
car2.getSpeed()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Car {
    constructor() {
        this.speed = 0
    }
}
car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)
console.log("now print with car2")
var car2 = {
    speed: 0,
    getSpeed: function () {
        console.log(this.speed)
    },
    getSpeed2: function () {
        setTimeout(function () {
            console.log("catch this in async")
            console.log(this.speed)
        }, 2000)
    },
    getSpeed3: function () {
        var that = this
        setTimeout(function () {
            console.log("use that to cache this")
            console.log(that.speed)
        }, 4000)
    },
    getSpeed4: function () {
        setTimeout(() => {
            console.log("now using arrow function")
            console.log(this.speed)
        }, 6000)
    }
}
car2.speed = 888
car2.getSpeed()
car2.getSpeed2()
car2.getSpeed3()
car2.getSpeed4()
~~~~~~~~~~~~~~~~~
function oops() {
    throw new Error("something strange happen")
}
console.log("before oops")
try {

    oops()
} catch (e) {
    console.log("something strage happen, reason:", e.toString(), e)
}
console.log("after oops")
~~~~~~~~~~~~~~~~~~~~
global.coffee = 'latte'
global.juice = 'lemonade'
function printSomething(name){
    console.log(global[name])
}
printSomething('coffee')
printSomething('juice')
printSomething('hello')
~~~~~~~~~~~~~~~~~~~~~~~~
global.coffee = 'latte'
global.juice = 'lemonade'
hello = 'world'
var fruit = 'apple'
function printSomething(name){
    console.log(global[name])
}
printSomething('coffee')
printSomething('juice')
printSomething('hello')
printSomething('fruit')
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
global.coffee = 'latte'
global.juice = 'lemonade'
hello = 'world'
var fruit = 'apple'
function printSomething(name){
    console.time(global[name])
    console.log(global[name])
    console.warn(global[name])
    console.timeEnd(global[name])
}
printSomething('coffee')
printSomething('juice')
printSomething('hello')
printSomething('fruit')
~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports = {
    qoo:function(data){
        console.log("[lab26]:[qoo]")
        console.log(data)
    }
}

var lab26_qoo = require('./lab26_qoo')
lab26_qoo.qoo("HiHiHi")

module.exports = {
    ooo:function (data){
        console.log("[lab26_foo]:[ooo]")
        console.log(data)
    }
}

var lab26_qoo = require('./lab26_qoo')
var lab26_foo = require('./lab26_foo')
lab26_qoo.qoo("HiHiHi")
lab26_foo.ooo("hoho")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
lab26_foo.js
var header = "[lab26_foo]"
module.exports = {
    ooo:function (data){
        console.log(header,":[ooo]")
        console.log(data)
    },
    status:'OK!'
}
lab26_qoo.js
module.exports = {
    qoo:function(data){
        console.log("[lab26]:[qoo]")
        console.log(data)
    }
}
lab26_main.js
var lab26_qoo = require('./lab26_qoo')
var lab26_foo = require('./lab26_foo')
lab26_qoo.qoo("HiHiHi")
lab26_foo.ooo("hoho")
console.log(lab26_foo.status)

lab27_variable_declaration.js

console.log(b)
console.log(a)
var b = 5
a = 3
console.log(b)
console.log(a)

~~~~~~~~~~~~~~~~~~~~~
"use strict";
console.log(b)
//console.log(a)
var b = 5
a = 3
console.log(b)
console.log(a)
~~~~~~~~~~~~~~~~~~~
"use strict";
console.log(b)
//console.log(a)
var b = 5
//var a
global.a = 3
console.log(b)
console.log(a)
~~~~~~~~~~~~~~~~~
lab28_variable_misdefine.js

var b1 = 5
console.log('stage1 , b1=', b1)
b1 += 5
console.log('stage2, b1=', b1)
b = 0
console.log('stage3, reset b1, b1=', b1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
lab29_var_scope.js

function foo() {
    console.log('var1=', var1)
    var var1 = 300;
    var2 = 400;
    console.log('var1=', var1, 'var2=', var2)
}
//console.log('var1 outside=', var1)
//console.log('var1 outside=', var2)
foo()
console.log('after run foo, var2 outside=', var2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var var3 = 5
function foo() {
    console.log('var1=', var1)
    console.log('var3=', var3)
    var var1 = 300;
    var2 = 400;
    var var3 = 500;
    console.log('var1=', var1, 'var2=', var2, 'var3=', var3)
}
//console.log('var1 outside=', var1)
//console.log('var1 outside=', var2)
foo()
console.log('after run foo, var2 outside=', var2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var var3 = 5
function foo() {
    console.log('var1=', var1)
    console.log('var3=', var3)
    var var1 = 300;
    var2 = 400;
    var var3 = 500;
    if (var1 > 100) {
        var var3 = 800;
        console.log("inside if, var3=", var3);
    }
    console.log('var1=', var1, 'var2=', var2, 'var3=', var3)
}
//console.log('var1 outside=', var1)
//console.log('var1 outside=', var2)
console.log('before, var3=', var3)
foo()
console.log('after run foo, var2 outside=', var2)
console.log('var3=', var3)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function printSomething(x) {
    console.log("before", message)
    if (x>10) {
        var message = "hihi"
    } else {
        var message = "XXXXXX"
    }
    console.log(message)
}
printSomething(5)
printSomething(10)
printSomething(15)

lab31_var_let.js

function var_test1() {
    console.log('1 x=', x)
    var x = 100;
    console.log('2 x=', x)
    if (true) {
        var x = 200;
        console.log('3 x=', x)
    }
    console.log('4 x=', x)
}
function let_test1() {
    //console.log('1 y=',y)
    let y = 100;
    console.log('2 y=', y)
    if (true) {
        let y = 200
        console.log('3 y=', y)
    }
    console.log('4 y=', y)
}
var_test1()
let_test1()
lab32_var_configurable.js
var v1 = 100
v2 = 200
console.log(v1, v2)
delete global.v2
delete global.v1
console.log(v1)
v2 = 300
console.log(v1, v2)
delete v2
console.log(v1)
~~~~~~~~~~~~~~~~~~~~~~~~~~
lab32
var v1 = 100
v2 = 200
console.log(v1, v2)
delete global.v2
delete global.v1
console.log(v1)
v2 = 300
console.log(v1, v2)
delete v2
console.log(v1)
function bar() {
    var v3 = 300
    v4 = 400
    console.log(v3, v4)
    delete v3
    delete v4
    console.log(v3)
    //console.log(v4)
    v4 = 500
    console.log(v3, v4)
    delete this.v4
    console.log(v3)
    //console.log(v4)
    v4 = 600
    console.log(v3, v4)
    delete global.v4
    console.log(v3)
    //console.log(v4)
}
bar()

lab33_var_let_loop.js

function loop1() {
    var i = 100
    for (var i = 0; i < 10; i++) {
        console.log("inner loop:", i)
    }
    console.log("finish, i=", i)
}
loop1()
//console.log("i=",i)
function loop2() {
    j = 150
    for (j = 0; j < 10; j++) {
        console.log("inner loop:", j)
    }
    console.log("finish,j=", j)
}
loop2()
console.log("j=",j)
function loop3() {
    let k = 200;
    for (let k=0; k<10; k++){
        console.log("inner loop:",k)
    }
    console.log("finish, k=",k)
}
loop3()

function loop1() {
    var i = 100
    for (var i = 0; i < 10; i++) {
        console.log("inner loop:", i)
    }
    console.log("finish, i=", i)
}
loop1()
//console.log("i=",i)
function loop2() {
    j = 150
    for (j = 0; j < 10; j++) {
        console.log("inner loop:", j)
    }
    console.log("finish,j=", j)
}
loop2()
console.log("j=", j)
function loop3() {
    let k = 200;
    for (let k = 0; k < 10; k++) {
        console.log("inner loop:", k)
    }
    console.log("finish, k=", k)
}
loop3()
function loop4() {
    var l = 0
    for (let m = l; m < 10; m++) {
        console.log("m=", m)
    }
    console.log("l=", l)
    //console.log("m=", m)
}
loop4()

lab34_var_let_setTimeout.js

function compareVarLet() {

    for (var i = 0; i < 10; i++) {
        setTimeout(() => { console.log("var, i=", i) }, 1000)
    }
    for (let j = 0; j < 10; j++) {
        setTimeout(() => { console.log("let, j=", j) }, 1000)
    }
}
compareVarLet()
lab35_var_let2.js

function scopeTest() {
    console.log("x=",x)
    var x= 5;
    console.log("x=",x)
    var x = 6;
    console.log("x=",x)
    //console.log("y=",y)
    let y= 3;
    console.log("y=",y)
    //let y = 5
    if (true) {
        let y=5
    }
    console.log("y=",y)
}
scopeTest()

lab36_var_let_test.js

var a = 100
var b = 200
if (a === 100) {
    console.log("inside scope, b=",b)
    //console.log("inside scope, a=",a)
    let a = 50
    var b = 400
    console.log(a, b)
}
function xyz() {
    console.log("inside xyz scope, b=",b)
    //console.log("inside scope, a=",a)
    let a = 55
    var b = 444
    console.log(a, b)
}
console.log(a, b)
xyz()

lab37_const1.js

const PROGRAM_TITLE = "hello"
//PROGRAM_TITLE += " world"
let MY_TITLE = "hello"
MY_TITLE += " world"
console.log(PROGRAM_TITLE, MY_TITLE)
const MAX1 = 1
let i = 100
const MAX2 = i + 50
i += 200
console.log(MAX1, MAX2, i)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const PROGRAM_TITLE = "hello"
//PROGRAM_TITLE += " world"
let MY_TITLE = "hello"
MY_TITLE += " world"
console.log(PROGRAM_TITLE, MY_TITLE)
const MAX1 = 1
let i = 100
const MAX2 = i + 50
i += 200
console.log(MAX1, MAX2, i)
const array1 = [1, 2, 3]
console.log(array1)
array1.push(4)
array1.push(5)
array1.push(6)
console.log(array1)
let array2 = [1,2,3]
console.log(array2)
array2.push(4)
array2.push(5)
array2.push(6)
console.log(array2)
array2 = ['p','q','r']
console.log(array2)
//array1 = ['p','q','r']
const obj1 = {
    id: 1,
    name: 'Mark'
}
let obj2 = {
    id: 2,
    name: 'Frank'
}
console.log(obj1, obj2)
obj1.name = 'Mark Ho'
obj1.location = "TPE"
obj2.role = "FAE"
console.log(obj1, obj2)
obj2 = {}
console.log(obj1, obj2)
//obj1 = {} // oops!

lab39_process.js

const process = require('process')
const fs = require('fs')
const FILE_PATH = "README.md"
console.log("program started")
console.log(process.cwd())
const file1 = fs.readFileSync(FILE_PATH)
console.log(file1.toString())
console.log("Program Ended")
~~~~~~~~~~~~~~~~~~~~~
const process = require('process')
const fs = require('fs')
const FILE_PATH = "README.md"
console.log("program started")
console.log(process.cwd())
const file1 = fs.readFileSync(FILE_PATH)
console.log(typeof file1)
console.log(file1.toString())
console.log("Program Ended")
~~~~~~~~~~~~~~~~~~~~~~~
lab40_timeout1.js

console.log('program start')
setTimeout(() => { console.log("job1 finshed") }, 2000)
setTimeout(() => { console.log("job2 finshed") }, 3000)
setTimeout(() => { console.log("job3 finshed") }, 4000)
console.log('program ended')


lab41_read_file_async.js

var fs = require('fs')
const FILE_PATH = "README.md"
fs.open(FILE_PATH, 'r', (error, handler) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("file opened, continue")
    let buffer = new Buffer(10000, 0)
    fs.read(handler, buffer, 0, 10000, null, (error, length) => {
        console.log(`total:${length} bytes`)
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handler, () => { console.log("close successfully") })
    })
})