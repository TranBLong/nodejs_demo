const os=require('os')

const totalMemory=os.totalmem()
const freeMemory=os.freemem()
const osType=os.type()
const osPlatform=os.platform()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
console.log(`OS Type: ${osType}`)
console.log(`OS Platform: ${osPlatform}`)

// const path = require('path');
// console.log(path.extname(__filename))
// console.log(path.isAbsolute(__filename))
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.join(__filename))
// console.log(path.parse(__filename))
// console.log(path.resolve(__filename))
// console.log(path.relative(__filename))