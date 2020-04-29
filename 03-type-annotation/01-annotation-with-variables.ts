/**
 * Type Annotation With Variables
 */

let apples: number = 5;
let fullName: string = 'Abhishek Baghel';
let isValid: boolean = false;
let nothing: null = null;
let notdefined: undefined = undefined;

// Build-In Objects
let now: Date = new Date();

// Array
let names: string[] = ['Abhishek', 'Dylan', 'Bittu'];
let nums: number[] = [1, 2, 3, 4, 5, 6];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

logNumber(25);

/**
 * Type Inference - If We Are Declaring and Initializing a variable in one statement, then there is no need to explicitly tell typescript about the type of data. Typescript can itself determine the correct type based on the initial value.
 */

/**
 * When To Use Annotations
 *  --> 1. Function that returns the 'any' type.
 *  --> 2. UnInitialized Variable.
 *  --> 3. When we want a variable to have a type that can't be inferred.
 */

// 1. Function that returns the 'any' type.
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. UnInitialized Variable.
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
words.forEach((word) => {
    if (word === 'green') {
        foundWord = true;
    }
});
console.log(foundWord);

// 3. When we want a variable to have a type that can't be inferred.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
// '|' --> Union Operator
console.log(numberAboveZero);
numbers.forEach((n) => {
    if (n > 0) {
        numberAboveZero = n;
    }
});
console.log(numberAboveZero);
