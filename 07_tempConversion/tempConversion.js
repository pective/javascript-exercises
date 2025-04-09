const convertToCelsius = function( temp ) {
  let convTemp = Math.round(((temp - 32) * 5/9) * 10) / 10;
  return convTemp;
};

const convertToFahrenheit = function( temp ) {
  let convTemp = Math.round((temp * 9/5 + 32) * 10) / 10;
  return convTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
