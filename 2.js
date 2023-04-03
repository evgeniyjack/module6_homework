function isPrime(number) {
  if (number > 1000) {
    console.log("Данные неверны");
    return;
  }
  if (number === 0 || number === 1) {
    console.log("Не является простым числом");
    return;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log("Не является простым числом");
      return;
    }
  }
  console.log("Простое число");
}

isPrime(7); // Простое число
isPrime(10); // Не является простым числом
isPrime(1001); // Данные неверны
isPrime(0); // Не является простым числом
isPrime(1); // Не является простым числом