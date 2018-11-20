//const convert = require('ether-converter')
const convert = require('../')

console.log(JSON.stringify(convert(1, 'ether'), null, 2))

console.log(JSON.stringify(convert(30, 'gwei'), null, 2))

console.log(JSON.stringify(convert(1.5, 'ether'), null, 2))
