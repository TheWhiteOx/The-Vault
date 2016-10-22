'use strict';
module.exports = function() {

  let vault = {};

  function _setValue(key, value) {
    vault.key = value;
  };

  function _getValue(key) {
    if (!vault.key) {
      return null
    }
    return vault.key
  };

  return {
    setValue: _setValue,
    getValue: _getValue
  }
};