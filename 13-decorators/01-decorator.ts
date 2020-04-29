/**
 * Decorator
 *      --> Any Kind of Decorator Runs When Class Defined Not When Instantiated.
 *      --> Can Use Multiple Decorators With One Class.
 *      --> Decorator Factory Function Runs Bottom Up - Decorator Nearest To Class Runs First and So On....
 */

// Decorator
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

// Decorator Factory (Higher Order Functions)
function Logger2(message: string) {
    return function(constructor: Function) {
        console.log(message);
    }
}

@Logger
@Logger2('Here We Go Again')
class Person {
    name = 'Abhishek Baghel';
    constructor() {
        console.log('Person Creating....');
    }
}

const p1 = new Person();
console.log(p1);