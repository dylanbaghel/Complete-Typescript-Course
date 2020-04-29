/**
 * Another Generic Function
 */

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got No Value';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi There'));
console.log(countAndDescribe(['Abhishek', 'Jonas', 'Dylan']));