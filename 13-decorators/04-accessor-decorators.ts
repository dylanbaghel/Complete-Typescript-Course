/**
 * Accessor(get, set), Method and Parameter Decorators.
 */

const Log2 = (target: any, name: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('Log Accessor Decorator...');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log3 = (target: any, name: string | symbol, descriptor: TypedPropertyDescriptor<(tax: number) => number>) => {
    console.log('Log Method Decorator...');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log4 = (target: any, name: string | symbol, position: number) => {
    console.log('Log Parameter Decorator...');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product2 {
    private _title: string;
    private _price: number;

    static classProperty = 'Here We Go';
    constructor(_title: string, _price: number) {
        this._title = _title;
        this._price = _price;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid Price - Should Be Positive');
        }
    }

    get price() {
        return this._price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}