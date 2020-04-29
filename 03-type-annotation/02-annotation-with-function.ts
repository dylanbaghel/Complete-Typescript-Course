/**
 * Type Annotations For Functions
 *  --> Code We Add To Tell Typescript What Type of Arguments a function will receive and what type of values it will return.
 *
 * Type Inference For Functions
 *  --> Typescript tries to figure out what type of value a function will return.
 *  --> Don't Use Type Inference For Functions.
 */

const add = (x: number, y: number): number => {
    return x + y;
};

console.log(add(11, 23));

const sub = function (x: number, y: number) {
    return x - y;
};

function mult(x: number, y: number) {
    return x * y;
}

// Function Not Returning Anything
const logger = (message: string) => {
    console.log(message);
};

// Never Return
const throwError = (): never => {
    throw new Error('Never Completes');
};

/**
 * Destructuring With Annotations
 */
const person = {
    name: 'Abhishek Baghel',
    age: 21,
};

const logPerson = (person: { name: string; age: number }): void => {
    console.log(person);
};
logPerson(person);

const logPersonDestructuring = ({
    name,
    age,
}: {
    name: string;
    age: number;
}): void => {
    console.log(name, age);
};
logPersonDestructuring(person);

/**
 * Function Types With Callback Functions
 */
const sum = (x: number, y: number, cb: (num: number) => void): void => {
    cb(x + y);
};
sum(10, 15, (result) => {
    console.log(result);
});
