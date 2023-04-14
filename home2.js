function checkNumber (num){
    if (num>1000 || num<0) {
      return "Данные не верны";
    }
    else if(num === 0 || num === 1) {
      return "Число не простое, не составное";
    }
    else {
      for (let i=2; i<num; i++) {
        if (num % i===0){
          return "Число составное";
        }
      }
      return "Число простое";
    }
  }
  console.log(checkNumber(12));