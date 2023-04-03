function countElements(array) {
    let even = 0;
    let odd = 0;
    let zero = 0;
  
    array.forEach(el => {
      if (el === 0) {
        zero++;
      } else if (el % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    });
  
    console.log(`Четных элементов: ${even}, Нечетных элементов: ${odd}, Нулевых элементов: ${zero}`);
  }
  
  const array = [1, 2, 3, 4, 5, 0, 'a', 'b', null, undefined];
  
  countElements(array);