var chosen = [2,4,5]
for (var index in chosen) {
    console.log("index=", index, ",value=", chosen[index])
}

for(var item of chosen){
    console.log("value=", item)
}

var stores = ['fami','ok','life']
for(index in stores){
    console.log(`index=${index},value=${stores[index]}`)
}

var dict1 = {name:"smile", role:"R&D", age:40}
for(index in dict1){
    console.log(index,dict1[index])
}