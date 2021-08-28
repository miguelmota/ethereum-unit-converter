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

function intToHex(value) {
  try {
    return '0x' + new BN(value || 0).toString(16)
  } catch(err) {
    return ''
  }
}

units.forEach(function(unit) {
  var el = document.querySelector('.' + unit)
  el.addEventListener('input', function(ev) {
    var val = ev.target.value.trim()
    var elunit = ev.target.className

    if (val) {
      update(val, elunit)
    } else {
      clearAllExcept(elunit)
    }
  })
})

function update(val, elunit) {
  var result = convert(val, elunit)

  units.forEach(function(unit) {
    var el = document.querySelector('.' + unit)
    var x = result[unit]
    if (x === 'NaN') {
      x = ''
    }
    if (unit !== elunit || el.value.trim().startsWith('0x')) {
      el.value = x ? x : ''
    }

    var hexEl = document.querySelector('.hex.' + unit)
    hexEl.innerText = intToHex(x)
  })
}

function clearAllExcept(exceptUnit) {
  units.forEach(function(unit) {
    var el = document.querySelector('.' + unit)
    if (unit !== exceptUnit) {
      el.value = ''
    }

    var hexEl = document.querySelector('.hex.' + unit)
    hexEl.innerText = intToHex(0)
  })
}

update(document.querySelector('.ether').value, 'ether')
