/**
 * Type Casting
 */
const userInputElement = <HTMLInputElement>document.querySelector('#user-input');

// Alternate Syntax For Type Casting - To Avoid Clashes With JSX.
const userInputElement2 = document.querySelector('#user-input')! as HTMLInputElement;

userInputElement.value = 'Hi There';
userInputElement2.value = 'Here We Go';

const userInputElement3 = document.querySelector('#user-input');

if (userInputElement3) {
    (userInputElement3 as HTMLInputElement).value = 'World Goes Here';
}