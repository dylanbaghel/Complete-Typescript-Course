/**
 * Abstract Classes
 */
abstract class Department {
    constructor(public name: string) {}

    abstract summary(this: Department): string;
}

class ITDepartment extends Department {
    constructor() {
        super('IT');
    }

    summary() {
        return "Department: " + this.name;
    }
}

const it1 = new ITDepartment();
console.log(it1.summary());