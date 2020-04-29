/**
 * Generic Constraints
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Abhishek'}, {age: 18});
console.log(mergedObj.name, mergedObj.age);