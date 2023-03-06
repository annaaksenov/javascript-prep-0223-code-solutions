function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
whileLoop1();
console.log(whileLoop1());

function whileLoop2() {
  const array2 = [];
  let i = 0;
  while (i < 20) {
    array2.push(i);
    i += 2;
  }
  return array2;
}
whileLoop2();
console.log(whileLoop2());

function forLoop1() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3.push(i);
  }
  return array3;
}
forLoop1();
console.log(forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ' + i);
  }
}
forLoop2();

function forInLoop1(object) {
  const array4 = [];
  for (const x in object) {
    array4.push(x);
  }
  return array4;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
forInLoop1(object);
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array5 = [];
  for (const y in object) {
    array5.push(y);
  }
  return array5;
}
forInLoop2(object);
console.log(forInLoop2(object));
