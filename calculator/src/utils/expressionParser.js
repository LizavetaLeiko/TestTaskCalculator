const split = (expression, operator) => {
  const result = [];
  let braces = 0;
  let currentChunk = "";
  for (let i = 0; i < expression.length; ++i) {
    const curCh = expression[i];
    if (curCh === '(') {
      braces++;
    } else if (curCh === ')') {
      braces--;
    }
    if (braces === 0 && operator === curCh) {
      result.push(currentChunk);
      currentChunk = "";
    } else currentChunk += curCh;
  }
  if (currentChunk !== "") {
    result.push(currentChunk);
  }
  return result;
};
const parseMultiplicationSeparatedExpression = (expression) => {
  const numbersString = split(expression, '*');
  const numbers = numbersString.map(noStr => {
    if (noStr[0] === '(') {
      const expr = noStr.substr(1, noStr.length - 2);
      return parsePlusSeparatedExpression(expr);
    }
    return +noStr;
  });
  const initialValue = 1.0;
  const result = numbers.reduce((acc, no) => acc * no, initialValue);
  return result;
};
const parseDivisionSeparatedExpression = (expression) => {
  const numbersString = expression.split('/');
  const numbers = numbersString.map(noStr => parseMultiplicationSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.slice(1).reduce((acc, no) => acc / no, initialValue);
  return result;
};
const parseMinusSeparatedExpression = (expression) => {
  const numbersString = split(expression, '-');
  const numbers = numbersString.map(noStr => parseDivisionSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.slice(expression[0] === '-' ? 0 : 1).reduce((acc, no) => acc - no, initialValue);
  return result;
};
const parsePlusSeparatedExpression = (expression) => {
  const numbersString = split(expression, '+');
  const numbers = numbersString.map(noStr => parseMinusSeparatedExpression(noStr));
  const initialValue = 0.0;
  const result = numbers.reduce((acc, no) => acc + no, initialValue);
  return result;
};
const parse = (expression) => {
  const result = parsePlusSeparatedExpression(expression, '+');
  if (isNaN(result) || result === Infinity){
    return 'not valid expression'
  } else if(Number.isInteger(result)){
    return result
  } else {
    return result.toFixed(3)
  }
};

export default parse;