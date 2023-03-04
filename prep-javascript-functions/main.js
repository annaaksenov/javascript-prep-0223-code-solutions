function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const add2NumsResult = addTwoNumbers(2, 2);
console.log(add2NumsResult);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}
const convertedNumbers = convertHoursToMinutes(2);
console.log(convertedNumbers);

function getGreeting(name) {
  const greeting = 'Hello ' + name;
  return greeting;
}
const sayWorld = getGreeting('World!');
console.log(sayWorld);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const numInputs = addAndMultiplyBy5(10, 5);
console.log(numInputs);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const afterDividing = multiplyAndDivideBy5(35, 10);
console.log(afterDividing);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subbed2Nums = subtractTwoNumbers(22, 7);
console.log(subbed2Nums);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed);
