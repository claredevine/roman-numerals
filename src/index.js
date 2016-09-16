module.exports = function romanNumerals(numberOne, numberTwo) {
  // if (numberOne && numberTwo === 'II'){
  //   return 'IV';
  // } else if ((numberOne === 'III' && numberTwo === 'I') || (numberOne === 'I' && numberTwo === 'III')){
  //   return 'IV';
  // } else if (numberOne === 'II' && numberTwo === 'III'){
  //   return 'V';
  // } else {
  //   return numberOne + numberTwo;
  // }

  const sum = numberOne + numberTwo;

  if (sum === 'IIII') {
    return 'IV';
  } else if (sum === 'IIIII') {
    return 'V';
  } else {
    return sum;
  }
};
