/**
 * Rest Parameter
 */

const add = (...nums: number[]) => {
    let total = 0;
    nums.forEach(n => {
        total += n;
    });
    return total;
}

console.log(add(15, 20, 25));
const numbers = [15, 12, 55, 69, 87, 875, 54];
console.log(add(...numbers));