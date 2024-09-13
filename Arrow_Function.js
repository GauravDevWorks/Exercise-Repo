// Traditional Function
function addTraditional(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

// Testing the functions
const num1 = 5;
const num2 = 3;

console.log("Using traditional function: ", addTraditional(num1, num2)); // Output: 8
console.log("Using arrow function: ", addArrow(num1, num2)); // Output: 8