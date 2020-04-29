/**
 * The keyof Constraint
 */

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConvert({name: 'Abhishek', age: 20}, 'name'));