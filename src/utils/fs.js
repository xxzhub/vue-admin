const fs = require('fs')

const readFile=(file) => {
    let data =  fs.readFileSync(file,'utf8')
    return data;
}

const writeFile=(filename,context) => {
    fs.writeFileSync(filename,context)
}

export {
    readFile,
    writeFile
}