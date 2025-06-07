function binaryToDecimal(binaryStr) {
  let decVal = 0;
  const digits = binaryStr.split('').map(Number);
  const length = digits.length;

  for (let i = 0; i < length; i++) {
    decVal += digits[i] * Math.pow(2, length - i - 1);
  }

  return decVal;
}

function decimalToBinary(decimalNum) {
  if (decimalNum === 0) return '0';

  let binaryArr = [];
  while (decimalNum > 0) {
    binaryArr.push(decimalNum % 2);
    decimalNum = Math.floor(decimalNum / 2);
  }

  return binaryArr.reverse().join('');
}

function getValues() {
  const a = document.getElementById('valA').value;
  const b = document.getElementById('valB').value;

  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    alert("Please enter valid binary numbers.");
    return null;
  }

  return { a, b };
}

function add() {
  const values = getValues();
  if (!values) return;

  const decA = binaryToDecimal(values.a);
  const decB = binaryToDecimal(values.b);
  const sum = decA + decB;
  const binarySum = decimalToBinary(sum);

  document.getElementById('displayVal').textContent =
    `Decimal: ${sum} | Binary: ${binarySum}`;
}

function sub() {
  const values = getValues();
  if (!values) return;

  const decA = binaryToDecimal(values.a);
  const decB = binaryToDecimal(values.b);
  const diff = decA - decB;
  const binaryDiff = decimalToBinary(Math.abs(diff));
  const sign = diff < 0 ? "-" : "";

  document.getElementById('displayVal').textContent =
    `Decimal: ${diff} | Binary: ${sign}${binaryDiff}`;
}
