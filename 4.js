const printNumbers = (num1, num2) => {
    let current = num1;
    const intervalId = setInterval(() => {
      console.log(current);
      if (current === num2) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);