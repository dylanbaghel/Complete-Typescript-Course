/**
 * Spread Operator
 */
const names = ['Abhishek', 'Dylan', 'Bittu'];
const names2 = [...names, 'Jonas', 'Kora'];
const names3 = ['Berry', 'Cisco'];

names3.push(...names2);
console.log(names3);

const person = {
    name: 'Abhishek',
    age: 30
};
const clonedPerson = { ...person };
console.log(clonedPerson);