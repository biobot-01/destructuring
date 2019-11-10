// Destructuring Assignment
// let a;
// let b;
// [a, b] = [100, 200];

// Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);
// console.log(rest);

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// console.log(a, b);
// console.log(rest);

// Array Destructuring
// const people = ['John', 'Beth', 'Mike', 'Mary'];
// const [person1, person2, person3, person4] = people;

// console.log(person1, person2, person3, person4);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike', 'Mary'];
// }

// let person1;
// let person2;
// let person3;
// let person4;
// [person1, person2, person3, person4] = getPeople();

// console.log(person1, person2, person3, person4);

// Object Destructuring
// const person = {
//   name: 'John Doe',
//   age: 32,
//   city: 'Miami',
//   gender: 'Male',
//   sayHello: () => {
//     console.log('Hello');
//   }
// }

// Old ES5 way
// const name = person.name;
// const age = person.age;
// const city = person.city;

// New ES6 destructuring
// const {name, age, city, sayHello} = person;

// console.log(name, age, city);

// sayHello();