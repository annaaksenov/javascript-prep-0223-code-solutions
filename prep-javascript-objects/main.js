const person = {
  firstName: 'Michael',
  lastName: 'Scott',
  hobby: 'parkour'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s name is:', fullName);
person.job = 'Regional Manager';
console.log('This person\'s current job is:', person.job);
person['previousJob'] = 'Salesman';
console.log('The person\'s previous job is:', person['previousJob']);

console.log(person);
