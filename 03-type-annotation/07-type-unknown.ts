/**
 * Unknown Type
 */

let userInputAny: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Abhishek';

userName = userInputAny; // Won't Complaint Because of Any Type.
userName = userInput; // Unknown Type Complaint Because The Value is Unknown.
