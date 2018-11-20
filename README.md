# ether-converter

> Ether unit converter

## Demo

[https://lab.miguelmota.com/ether-converter](https://lab.miguelmota.com/ether-converter)

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

Another example

```js
const convert = require('ether-converter')

const result = convert(30, 'gwei')

console.log(JSON.stringify(result, null, 2))
```

Output

```bash
{
  "wei": "30000000000",
  "kwei": "30000000",
  "mwei": "30000",
  "gwei": "30",
  "szabo": "0.03",
  "finney": "0.00003",
  "ether": "0.00000003",
  "kether": "0.00000000003",
  "mether": "0.00000000000003",
  "gether": "0.00000000000000003",
  "tether": "0.00000000000000000003"
}
```

## License

[MIT](LICENSE)
