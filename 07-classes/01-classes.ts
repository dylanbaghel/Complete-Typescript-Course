/**
 * CLASSES
 *  --> Blueprint to create an object with some fields and methods to represent a thing.s
 */

/**
 * Modifiers
 *     --> 1. public - This method can be called any where, any time.
 *     --> 2. This method can only be called by other methods in this class.
 *     --> 3. This method can be called by other methods in this class, or by other methods in child classes.
 */

class Person {
    //  name: string;
    //  age: number
    //  constructor(name: string, age: number) {
    //      this.name = name;
    //      this.age = age;
    //  }

    // Typescript Has a shorter syntax to write above code.
    constructor(public name: string, public age: number) {}

    summary() {
        return `${this.name} is ${this.age} Years Old`;
    }
}

const abhishek = new Person("Abhishek Baghel", 21);
console.log(abhishek);
console.log(abhishek.summary());
/**
 * Inheritance
 */
class Blogger extends Person {
    constructor(name: string, age: number, public category: string) {
        super(name, age);
    }

    // Overriding Parent Class Method
    summary() {
        return `${this.name} is a professional blogger and writes article on ${this.category}. and His Age is ${this.age}`;
    }
}

const bloggerOne = new Blogger("Dylan Baghel", 18, "Technology");
console.log(bloggerOne);
console.log(bloggerOne.summary());

/**
 * Getters & Setters
 */
enum SemiconductorType {
    PURE,
    IMPURE,
}
class ElectronicItem {
    // Class Level Property
    static __NAME__: string = "<ElectronicItem>";

    // Class Level Method
    static classLevel() {
        return "Class Level Method";
    }

    constructor(
        private _type: string,
        private _typeOfSemiconductorUsed: SemiconductorType
    ) {}

    public get type(): string {
        return this._type;
    }

    public set type(newType: string) {
        this._type = newType;
    }

    public get typeOfSemiconductorUsed(): SemiconductorType {
        return this._typeOfSemiconductorUsed;
    }

    public set typeOfSemiconductorUsed(newType: SemiconductorType) {
        this._typeOfSemiconductorUsed = newType;
    }

    summary(): string {
        const typeOfSemiconductorUsed =
            this._typeOfSemiconductorUsed === 0 ? "Pure" : "Impure";
        return `Type: ${this._type} | Type Of Semiconductor Used: ${typeOfSemiconductorUsed}`;
    }
}

const eItemOne = new ElectronicItem("Radio", SemiconductorType.PURE);
console.log(eItemOne.type, eItemOne.typeOfSemiconductorUsed);
console.log(eItemOne.summary());

eItemOne.type = "I-POD";
eItemOne.typeOfSemiconductorUsed = SemiconductorType.IMPURE;
console.log(eItemOne.type, eItemOne.typeOfSemiconductorUsed);
console.log(eItemOne.summary());

console.log(ElectronicItem.__NAME__);
console.log(ElectronicItem.classLevel());
