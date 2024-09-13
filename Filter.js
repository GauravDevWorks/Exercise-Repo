function isEven(num) {
  return num % 2 == 0; // Returns true if the number is even, false otherwise
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
