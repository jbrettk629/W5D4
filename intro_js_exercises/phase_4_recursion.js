function range(start, end) {
  if (end === start) {
    return [start];
  }
  return range(start, end - 1).concat([end]);
}

console.log(range(1, 5));

function sumRec(arr) {
  if (arr.length <= 1) {
    return arr[0];
  }
  let result = sumRec(arr.slice(1)) + arr[0];
  return result;
}

console.log(sumRec([1, 2, 3, 4, 5]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

console.log(exponent(2, 5));

function fibonacci(n) {
  if (n === 2) {
    return [1, 1];
  }
  if (n === 1) {
    return [1];
  }
  
  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}

console.log(fibonacci(5));



