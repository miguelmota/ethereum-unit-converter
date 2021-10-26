const BN = require('bignumber.js')
const convert = require('../')

const units = [
  'wei',
  'kwei',
  'mwei',
  'gwei',
  'szabo',
  'finney',
  'ether',
  'kether',
  'mether',
  'gether',
  'tether'
]

function intToHex (value) {
  try {
    return '0x' + new BN(value || 0).toString(16)
  } catch (err) {
    return ''
  }
}

units.forEach(function (unit) {
  const el = document.querySelector('.' + unit)
  el.addEventListener('input', function (ev) {
    const val = ev.target.value.trim()
    const elunit = ev.target.className

    if (val) {
      update(val, elunit)
    } else {
      clearAllExcept(elunit)
    }
  })
})

function update (val, elunit) {
  const result = convert(val, elunit)

  units.forEach(function (unit) {
    const el = document.querySelector('.' + unit)
    let x = result[unit]
    if (x === 'NaN') {
      x = ''
    }
    if (unit !== elunit || el.value.trim().startsWith('0x')) {
      el.value = x || ''
    }
    try {
      window.localStorage.setItem('ether', result.ether)
    } catch (err) {
      console.error(err)
    }

    const hexEl = document.querySelector('.hex.' + unit)
    hexEl.innerText = intToHex(x)
  })
}

function clearAllExcept (exceptUnit) {
  units.forEach(function (unit) {
    const el = document.querySelector('.' + unit)
    if (unit !== exceptUnit) {
      el.value = ''
    }

    const hexEl = document.querySelector('.hex.' + unit)
    hexEl.innerText = intToHex(0)
  })
}

const ethEl = document.querySelector('.ether')

try {
  const cached = window.localStorage.getItem('ether')
  if (cached) {
    ethEl.value = cached
  }
} catch (err) {
  console.error(err)
}

update(ethEl.value, 'ether')
