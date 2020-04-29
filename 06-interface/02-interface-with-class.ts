/**
 * Interface With Classes
 */
interface Greetable {
    // name: string,
    readonly name: string,
    greet(phrase: string): void;
}

class Person implements Greetable {
    constructor(public name: string) {}

    greet(phrase: string) {
        console.log(phrase + ", " + this.name);
    }
}

const p1 = new Person('Abhishek Baghel');
p1.greet("Bonjour");