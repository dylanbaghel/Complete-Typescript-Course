/**
 * ReadOnly - Access Modifiers
 */

class User {
    constructor(private readonly _id: string, private _name: string) {}

    public get id() {
        return this._id;
    }

    public get name() {
        return this.name;
    }

    // Won't Work Because id is readonly property;
    public set id(newId: string) {
        this._id = newId;
    }

    public set name(newName: string) {
        this._name = newName;
    }
}

const user1 = new User('1', 'Abhishek Baghel');
console.log(user1);