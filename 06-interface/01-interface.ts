/**
 * Interface
 *  --> Creates a new type, describing the property names and value types of an object.
 */

interface Address {
    city: string;
    state: string;
    street: string;
    country: string;
    zipcode: number;
    landmark?: string;
}

interface User {
    username: string;
    email: string;
    fullName: string;
    // Using Optional Property
    isMarried?: boolean;
    createdAt: Date;

    // Can Use Another Interface
    address: Address;

    // Can Use Function
    formattedAddress(): string;
}

const userOne: User = {
    username: "abhi_baghel",
    fullName: "Abhishek Baghel",
    email: "abhi@gmail.com",
    createdAt: new Date(),
    address: {
        city: "Gwalior",
        state: "MP",
        country: "India",
        zipcode: 474010,
        street: "A7 Shanti Baag Colony",
    },
    formattedAddress() {
        return `${this.address.zipcode}, ${this.address.street}, ${this.address.city} - ${this.address.state} | ${this.address.country}`;
    },
};

// Interface Help In Avoiding The Long Object Type Annotation
function createUser(user: User) {
    console.log("Creating User...", user);
}

createUser(userOne);
console.log(userOne.formattedAddress());

const userTwo: User = {
    username: "dylan_123",
    fullName: "Dylan Baghel",
    email: "db@gmail.com",
    isMarried: false,
    createdAt: new Date("06-06-1998"),
    address: {
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        zipcode: 55639,
        street: "New CP Colony, Vasant Vihaar",
        landmark: "Near BSNL Mobile Tower",
    },
    formattedAddress() {
        return `${this.address.street}, ${this.address.city} ${this.address.state} | ${this.address.country} - ${this.address.zipcode}`;
    },
};
createUser(userTwo);
console.log(userTwo.formattedAddress());

/**
 * Code Reusability
 */
interface Summarizable {
    summary(): string;
}

const person = {
    name: "Abhishek Baghel",
    age: 21,
    summary() {
        return `Name: ${this.name} | Age: ${this.age}`;
    },
};

const vehicle = {
    name: "Ford 101",
    make: "Ford",
    year: 2002,
    summary() {
        return `${this.name} Made By ${this.make} in Year --> ${this.year}`;
    },
};

const logSummary = (item: Summarizable): void => {
    console.log(item.summary());
};
logSummary(person);
logSummary(vehicle);
