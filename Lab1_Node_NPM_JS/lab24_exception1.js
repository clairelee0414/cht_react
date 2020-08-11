function oops(){
    throw new Error("something strange happe ")
}

console.log("before")
try{
oops()
}catch(e){
    console.log("something strange happen, reason:",e.toString(),e)
}
console.log("after")