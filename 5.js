const power = (x, p) => {
    let result = 1;
    for (let i = 0; i < p; i++) {
      result *= x;
    }
    return result;
  }
  
  console.log(power(2, 3)); // 8
  console.log(power(5, 2)); // 25
  console.log(power(10, 0)); // 1