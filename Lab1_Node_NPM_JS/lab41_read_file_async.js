var fs = require('fs')
const FILE_PATH = "../README.md"
fs.open(FILE_PATH, 'r', (error, handler) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("file opened, continue")
    let buffer = new Buffer.alloc(10000, 0)
    fs.read(handler, buffer, 0, 10000, null, (error, length) => {
        console.log(`total:${length} bytes`)
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handler, () => { console.log("close successfully") })
    })
})