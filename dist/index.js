'use strict';

var BN = require('bignumber.js');

function parseUnit(unit) {
  var decimalsToUnit = {
    '-18': 'wei',
    '-15': 'kwei',
    '-12': 'mwei',
    '-9': 'gwei',
    '-6': 'szabo',
    '-3': 'finney',
    1: 'ether',
    3: 'kether',
    6: 'mether',
    9: 'gether',
    12: 'tether'
  };
  if (typeof unit === 'string') {
    unit = unit.trim().toLowerCase();
  }
  if (unit !== undefined && !isNaN(unit)) {
    unit = decimalsToUnit[unit];
  }
  return unit;
}

function convertToEther(value, unit) {
  if (value === undefined) {
    throw TypeError('value is required');
  }
  unit = parseUnit(unit);
  if (unit === undefined) {
    throw TypeError('unit is required');
  }

  var v = new BN(value);
  if (unit === 'eth') unit = 'ether';

  if (unit === 'wei') return v.times(new BN(0.000000000000000001));
  if (unit === 'kwei') return v.times(new BN(0.000000000000001));
  if (unit === 'mwei') return v.times(new BN(0.000000000001));
  if (unit === 'gwei') return v.times(new BN(0.000000001));
  if (unit === 'szabo') return v.times(new BN(0.000001));
  if (unit === 'finney') return v.times(new BN(0.001));
  if (unit === 'ether') return v.times(new BN(1));
  if (unit === 'kether') return v.times(new BN(1000));
  if (unit === 'mether') return v.times(new BN(1000000));
  if (unit === 'gether') return v.times(new BN(1000000000));
  if (unit === 'tether') return v.times(new BN(1000000000000));

  throw TypeError('Invalid unit');
}

function converter(value, unit, toUnit) {
  unit = parseUnit(unit);
  toUnit = parseUnit(toUnit);
  var v = convertToEther(value, unit);
  if (unit === 'eth') unit = 'ether';
  if (toUnit === 'eth') toUnit = 'ether';

  var result = {
    wei: null,
    kwei: null,
    mwei: null,
    gwei: null,
    szabo: null,
    finney: null,
    ether: null,
    kether: null,
    mether: null,
    gether: null,
    tether: null
  };

  result[unit] = new BN(value).toString(10);

  if (unit !== 'wei') {
    result.wei = v.times(new BN(1000000000000000000)).toString(10);
  }
  if (unit !== 'kwei') {
    result.kwei = v.times(new BN(1000000000000000)).toString(10);
  }
  if (unit !== 'mwei') {
    result.mwei = v.times(new BN(1000000000000)).toString(10);
  }
  if (unit !== 'gwei') {
    result.gwei = v.times(new BN(1000000000)).toString(10);
  }
  if (unit !== 'szabo') {
    result.szabo = v.times(new BN(1000000)).toString(10);
  }
  if (unit !== 'finney') {
    result.finney = v.times(new BN(1000)).toString(10);
  }
  if (unit !== 'ether') {
    result.ether = v.times(new BN(1)).toString(10);
  }
  if (unit !== 'kether') {
    result.kether = v.times(new BN(0.001)).toString(10);
  }
  if (unit !== 'mether') {
    result.mether = v.times(new BN(0.000001)).toString(10);
  }
  if (unit !== 'gether') {
    result.gether = v.times(new BN(0.000000001)).toString(10);
  }
  if (unit !== 'tether') {
    result.tether = v.times(new BN(0.000000000001)).toString(10);
  }

  if (toUnit) {
    if (result[toUnit] === undefined) {
      throw TypeError('Invalid unit');
    }

    return result[toUnit];
  }

  return result;
}

module.exports = converter;