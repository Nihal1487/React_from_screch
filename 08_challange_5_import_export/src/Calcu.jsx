function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function malti(a, b) {
  return a * b;
}

function div(a, b) {
  let div = a / b;
  div = div.toFixed(2);
  return div;
}

export { sum, sub, malti, div };
