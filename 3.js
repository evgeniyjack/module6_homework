function getSum(number1) {
    return function(number2) {
      return number1 + number2;
    };
  }
  
  const sum = getSum(5)(10);
  console.log(sum); // 15