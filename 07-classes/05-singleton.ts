/**
 * Singleton - Private Constructors
 */

class Department {
    static instance: Department;
    private constructor(public name: string) {}

    static getInstance(name: string) {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new Department(name);
        return this.instance;
    }
}

const d1 = Department.getInstance('IT');
console.log(d1);
const d2 = Department.getInstance('IT');
console.log(d2);
console.log(d1 === d2);

// Still Gives IT - Singleton Pattern
const d3 = Department.getInstance('CS');
console.log(d3);
