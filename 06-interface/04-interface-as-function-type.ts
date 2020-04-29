/**
 * Interface As Function Type
 */
type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (x: number, y: number) => x + y;
console.log(add(5, 10));

interface multFn {
    (a: number, b: number): number;
}

let mult: multFn;

mult = (x: number, y: number) => x * y;
console.log(mult(5, 10));