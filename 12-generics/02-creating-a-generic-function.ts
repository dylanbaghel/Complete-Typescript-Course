/**
 * Creating a Generic Function
 */

/**
 * function merge(objA: object, objB: object) {
 *  return Object.assign(objA, objB);
 * }

 * const mergedObj = merge({name: 'Abhishek'}, {age: 30});
 * console.log(mergedObj.) // cannot access name, age;
 */

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Abhishek'}, {age: 18});
console.log(mergedObj.name, mergedObj.age);