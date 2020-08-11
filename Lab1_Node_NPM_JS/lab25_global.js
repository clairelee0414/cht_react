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