<h3 align="center">
  <br />
  <img src="https://user-images.githubusercontent.com/168240/51433598-a4171800-1c02-11e9-95c2-b19588f497e3.png" alt="logo" width="600" />
  <br />
  <br />
  <br />
</h3>

# ether-converter

> Ether unit converter

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/miguelmota/ether-converter/master/LICENSE) [![Build Status](https://travis-ci.org/miguelmota/ether-converter.svg?branch=master)](https://travis-ci.org/miguelmota/ether-converter) [![dependencies Status](https://david-dm.org/miguelmota/ether-converter/status.svg)](https://david-dm.org/miguelmota/ether-converter) [![NPM version](https://badge.fury.io/js/ether-converter.svg)](http://badge.fury.io/js/ether-converter)

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

Output:

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

Another example:

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

Specific output examples:

```js
console.log(convert(1, 'ether', 'wei')) // 1000000000000000000

console.log(convert(30, 'gwei', 'ether')) // 0.00000003

console.log(convert(30, 'gwei', 'wei')) // 30000000000
```

## CLI

Install

```bash
npm install -g ether-converter
```

### Getting started

```bash
$ ether-converter {value} {unit}
```

### Examples

```bash
$ ether-converter 10 ether

wei     10000000000000000000
kwei    10000000000000000
mwei    10000000000000
gwei    10000000000
szabo   10000000
finney  10000
ether   10
kether  0.01
mether  0.00001
gether  0.00000001
tether  0.00000000001
```

```bash
$ ether-converter 30 gwei

wei     30000000000
kwei    30000000
mwei    30000
gwei    30
szabo   0.03
finney  0.00003
ether   0.00000003
kether  0.00000000003
mether  0.00000000000003
gether  0.00000000000000003
tether  0.00000000000000000003
```

```bash
$ ether-converter 1 ether wei

1000000000000000000
```

```bash
$ ether-converter 1 ether wei

1000000000000000000
```

```bash
$ ether-converter 30 gwei ether

0.00000003
```

Piping value example:

```bash
$ echo 1000000000000000000 | ether-converter wei ether

1
```

## License

[MIT](LICENSE)
