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
