const string1 = "いゅ"
var buffer0 = new Buffer.from(string1)
var buffer1 = new Buffer.from(string1, "ascii")
var buffer2 = new Buffer.from(string1, "utf8")
var buffer3 = new Buffer.from(string1, "utf16le")
var buffer4 = new Buffer.from(string1, "ucs2")
//var buffer5 = new Buffer.from(string1, "big5")
console.log("[base64]buffer0="+buffer0.toString('base64'))
console.log("[hex-default]buffer0="+buffer0.toString('hex'))
console.log("[hex-ascii]buffer1="+buffer1.toString('hex'))
console.log("[hex-utf8]buffer2="+buffer2.toString('hex'))
console.log("[hex-utf16]buffer3="+buffer3.toString('hex'))
console.log("[hex-ucs2]buffer4="+buffer4.toString('hex'))
//console.log("[hex-ms950]buffer5="+buffer5.toString('hex'))