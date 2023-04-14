function sumNumber (x) {
    return function (y) {
      return x+y;
    };
  }
  let f = sumNumber(9);
  console.log (f(5), f(8));
  console.log (sumNumber (3)(4), sumNumber(5)(8));