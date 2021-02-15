'use strict';

const createOptions = (width, height) => {
  return {
    shotSize: { width, height },
    windowSize: { width, height },
  };
};

const isNonEmptyString = str => {
  return str && str.length > 0;
};

const isBlankString = str => {
  return !str || /^\s*$/.test(str);
};

const notBlankOrElse = (str, defaultValue) => {
  return isBlankString(str) ? defaultValue : str;
};

const toFormatString = obj => {
  return `(${objToString(obj)})`;
};

const objToString = obj => {
  let str = '';
  for (const p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str += `${p} => ${typeof obj[p] === 'object' ? `[${objToString(obj[p])}]` : `${+obj[p]},`}`;
    }
  }
  return str;
};

module.exports = {
  createOptions,
  toString: toFormatString,
  isNonEmptyString,
  isBlankString,
  notBlankOrElse,
};
