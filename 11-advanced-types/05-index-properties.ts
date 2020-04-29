/**
 * Index Properties
 */

/**
 * {
 *  email: 'Not a Valid Email',
 *  password: 'Incorrect',
 *  ...so on.
 * }
 */
interface ErrorContainer {
    [key: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Email is Not Valid',
    password: 'Incorrect Password'
};
console.log(errorBag);