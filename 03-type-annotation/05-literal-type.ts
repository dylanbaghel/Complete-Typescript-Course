/**
 * Literal Type
 */
function combine(
    x: string | number,
    y: string | number,
    resultType: 'as-number' | 'as-string' // Literal Type - Fixed Value As Type
) {
    if (resultType === 'as-number') {
        if (
            (typeof x === 'number' && typeof y === 'number') ||
            (!isNaN(+x) && !isNaN(+y))
        ) {
            return +x + +y;
        } else {
            throw new Error('Invalid Input');
        }
    } else {
        return x.toString() + y.toString();
    }
}

console.log(combine(5, 6, 'as-string'));
console.log(combine(11, 22, 'as-number'));
console.log(combine('5', '55', 'as-number'));
console.log(combine('5', '60', 'as-string'));
console.log(combine('Abhishek', 'Baghel', 'as-string'));
console.log(combine('Dylan', '22', 'as-number'));
