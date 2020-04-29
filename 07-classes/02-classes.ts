/**
 * Classes - Part 2
 */

class Department {
    constructor(public name: string) {}

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 'Accounts', describe: accounting.describe };
accountingCopy.describe();