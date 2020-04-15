/**
 * Tuples
 *  --> Array-like Structure Where Each Element Represents Some Property Of a Record.
 *  --> Fixed Order
 */

//  Person Tuples With Specific Order -> Name, isMarried, Age
const person: [string, boolean, number] = ["Abhishek", false, 21];

// Another Way Using type alias
type Animal = [string, number];

const cat: Animal = ["Cat", 5];

const persons: [string, number][] = [
    ["Abhishek", 21],
    ["Dylan", 18],
    ["Bittu", 20],
];
