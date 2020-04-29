/**
 * Destructuring
 */

const person = {
    fullName: 'Abhishek Baghel',
    age: 15,
    address: {
        state: "MP",
        city: "Gwalior"
    }
};

const { fullName, age, address: { state, city } } = person;
console.log(fullName, age, state, city);

const human = ['Abhishek', 15, false];
const [humanName, humanAge, isMarried] = human;
console.log(humanName, humanAge, isMarried);

const humans: [string, number, boolean][] = [
    ['Dylan', 18, false],
    ['Bittu', 19, false]
];

for(let [hName, hAge, hIsMarried] of humans) {
    console.log(hName, hAge, hIsMarried);
}