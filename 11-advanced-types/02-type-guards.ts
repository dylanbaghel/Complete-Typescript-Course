/**
 * Type Guards
 */

// TypeGuards With Primitive Types
type Combinable = string | number;
const add = (x: Combinable, y: Combinable): Combinable => {
    // This Checking is Called Type Guard.
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    return x + y;
}

// TypeGuards With Custom Types
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee): void {
    console.log('Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Abhishek', startDate: new Date() });
printEmployeeInformation({ name: 'Dylan', privileges: ['create', 'update', 'delete'] });

// TypeGuards With Classes
class Car {
    drive() {
        console.log('Driving a Car...');
    }
}

class Truck {
    drive() {
        console.log('Driving a Truck....')
    }

    loadCargo(amount: number) {
        console.log('Loading Cargo.... ' + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(50);
    }
}

useVehicle(v1);
useVehicle(v2);