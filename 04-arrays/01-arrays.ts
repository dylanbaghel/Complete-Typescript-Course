const carMakers: string[] = [];

// Type Inference In Action, If Initialize With Values.
const names = ["Abhishek", "Dylan", "Jonas"];

// 2-d Arrays
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help With Inference When Extracting Values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent Incompatible Values
carMakers.push(100);

// Help With Built-in Functions - 'map', 'forEach', 'reduce' etc --> Autocompletion

// Flexible Types
const importantDates = [new Date(), "2030-10-06"];
const impDates: (Date | string)[] = [];
