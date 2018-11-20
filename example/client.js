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
    var val = ev.target.value

    if (val) {
      update(val, unit)
    } else {
      clearAllExcept(unit)
    }
  })
})

function update(val, unit) {
  var result = convert(val, unit)

  units.forEach(function(unit) {
    var el = document.querySelector('.' + unit)
    el.value = result[unit]
  })
}

function clearAllExcept(exceptUnit) {
  units.forEach(function(unit) {
    if (unit !== exceptUnit) {
      var el = document.querySelector('.' + unit)
      el.value = ''
    }
  })
}

update(1, 'ether')
