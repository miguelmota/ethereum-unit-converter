//const convert = require('ethereum-unit-converter')
const convert = require('../')

console.log(JSON.stringify(convert(1, 'ether'), null, 2))
console.log(JSON.stringify(convert(30, 'gwei'), null, 2))
console.log(JSON.stringify(convert(1.5, 'ether'), null, 2))
console.log(convert(1, 'ether', 'wei')) // 1000000000000000000
console.log(convert(30, 'gwei', 'wei')) // 30000000000
