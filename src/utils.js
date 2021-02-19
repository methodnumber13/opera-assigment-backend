const isHex = str => Boolean(str.toString().match(/^0x[0-9a-f]+$/i));
const decToHex = (dec = '') => {
  return '0x' + dec.toString(16);
};

module.exports = { isHex, decToHex };
