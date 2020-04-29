/**
 * Function Overloading
 */

type Combinable = string | number;

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: string, y: number): string;
function add(x: number, y: string): string;
function add(x: Combinable, y: Combinable): Combinable {
    // This Checking is Called Type Guard.
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    return x + y;
}

const result1 = add(5, 15); // result1 -> Number
const result2 = add('Abhishek', ' Baghel'); //result2 -> String
console.log(result1, result2.toUpperCase());