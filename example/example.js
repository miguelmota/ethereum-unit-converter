const convert = require('ether-converter')

const result = convert(1, 'ether')

console.log(JSON.stringify(result, null, 2))
