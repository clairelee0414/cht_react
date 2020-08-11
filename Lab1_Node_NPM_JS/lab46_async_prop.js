const fs = require('fs')
function FileObject() {
    this.filename = ''
    this.file_exists = function (callback) {
        console.log("about to open:" + this.filename)

    }
}

var fo1 = new FileObject()
fo1.filename = "README.md"
fo1.file_exists((error, results) => {
    if (error) {
        console.log("error open file:" + error)
        return
    }
    console.log("file exists!", results)
})