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

units.forEach(function(unit) {
  var el = document.querySelector('.' + unit)
  el.addEventListener('input', function(ev) {
    var val = ev.target.value.replace(/[^\d\.]/gi, '')
    var elunit = ev.target.className

    if (val) {
      update(val, elunit)
    } else {
      clearAllExcept(elunit)
    }
  })
})

function update(val, elunit) {
  var result = convert(parseFloat(val, 10), elunit)

  units.forEach(function(unit) {
    if (unit === elunit) return
    var el = document.querySelector('.' + unit)
    var x = result[unit]
    el.value = x ? x : ''
  })
}

function clearAllExcept(exceptUnit) {
  units.forEach(function(unit) {
    if (unit === exceptUnit) return
    var el = document.querySelector('.' + unit)
    el.value = ''
  })
}

update(document.querySelector('.ether').value, 'ether')
