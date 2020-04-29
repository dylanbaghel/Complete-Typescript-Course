/**
 * Built-In Generics
 *  --> What Are Generics?
 */
const names: Array<string> = [];
const names2: string[] = [];
let arr: Array<string | number> = [];
arr = ['Abhishek', 'Baghel'];
console.log(arr);
arr = [51, 1, 3];
console.log(arr);

const promise: Promise<string> = new Promise((resolve: (reason: string) => void) => {
    setTimeout(() => {
        resolve('This is Done.');
    }, 2000);
});

promise.then((data) => {
    console.log(data.toUpperCase());
});