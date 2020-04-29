/**
 * Intersection Types
 *      --> Similar To Set Theory Intersection, Create Types Which Intersects
 */


type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Abhishek Baghel',
    privileges: ['create-server'],
    startDate: new Date()
}

type x = boolean | number;
type y = number | string;

type z = x & y;

// Above Thing Can Be Achieved Using Interfaces
interface Author {
    name: string;
    category: string;
}

interface User {
    name: string,
    username: string,
    password: string 
}

interface AuthorUser extends Author, User {}

const a1: AuthorUser = {
    name: 'Bittu',
    category: 'Technology',
    username: 'b_baghel',
    password: 'abhishek'
}