# ethereum-unit-converter

> [Ethereum](https://ethereum.org/) unit converter in JavaScript

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/miguelmota/ethereum-unit-converter/master/LICENSE)
[![Build Status](https://travis-ci.org/miguelmota/ethereum-unit-converter.svg?branch=master)](https://travis-ci.org/miguelmota/ethereum-unit-converter)
[![dependencies Status](https://david-dm.org/miguelmota/ethereum-unit-converter/status.svg)](https://david-dm.org/miguelmota/ethereum-unit-converter)
[![NPM version](https://badge.fury.io/js/ethereum-unit-converter.svg)](http://badge.fury.io/js/ethereum-unit-converter)

## Example

[https://lab.miguelmota.com/ethereum-unit-converter](https://lab.miguelmota.com/ethereum-unit-converter)

## Install

```bash
npm install ethereum-unit-converter
```

## Getting started

```js
const convert = require('ethereum-unit-converter')

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
const convert = require('ethereum-unit-converter')

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
npm install -g ethereum-unit-converter
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

Using decimal numbers example:

```bash
$ ether-converter 1000000 -6 ether

1
```

```bash
$ ether-converter 1000000 -6 1

1
```

```bash
$ ether-converter 1 1 -6

1000000
```

## License

[MIT](LICENSE)
