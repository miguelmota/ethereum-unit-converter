# ether-converter

> Ether unit converter

## Install

```bash
npm install ether-converter
```

## Getting started

```js
const convert = require('ether-converter')

const result = convert(1, 'ether')

console.log(JSON.stringify(result, null, 2))
```

Output

```bash
{
  "wei": "1000000000000000000",
  "kwei": "1000000000000000",
  "mwei": "1000000000000",
  "gwei": "1000000000",
  "szabo": "1000000",
  "finney": "1000",
  "ether": "1",
  "kether": "0.001",
  "mether": "0.000001",
  "gether": "0.000000001",
  "tether": "0.000000000001"
}
```

## License

[MIT](LICENSE)
