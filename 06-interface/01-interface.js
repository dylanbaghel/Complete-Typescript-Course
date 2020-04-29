/**
 * Interface
 *  --> Creates a new type, describing the property names, methods and value types of an object.
 */
var userOne = {
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
    formattedAddress: function () {
        return this.address.zipcode + ", " + this.address.street + ", " + this.address.city + " - " + this.address.state + " | " + this.address.country;
    },
};
// Interface Help In Avoiding The Long Object Type Annotation
function createUser(user) {
    console.log("Creating User...", user);
}
createUser(userOne);
console.log(userOne.formattedAddress());
var userTwo = {
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
    formattedAddress: function () {
        return this.address.street + ", " + this.address.city + " " + this.address.state + " | " + this.address.country + " - " + this.address.zipcode;
    },
};
createUser(userTwo);
console.log(userTwo.formattedAddress());
var person = {
    name: "Abhishek Baghel",
    age: 21,
    summary: function () {
        return "Name: " + this.name + " | Age: " + this.age;
    },
};
var vehicle = {
    name: "Ford 101",
    make: "Ford",
    year: 2002,
    summary: function () {
        return this.name + " Made By " + this.make + " in Year --> " + this.year;
    },
};
var logSummary = function (item) {
    console.log(item.summary());
};
logSummary(person);
logSummary(vehicle);
