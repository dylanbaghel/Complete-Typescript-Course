/**
 * Property Decorator
 *      --> If Property Decorator Apply On Property / Member Variables Then Decorator Gets Prototype Object as target.
 *      --> If Property Decorator Apply On Static Property Then Decorator Gets Constructor Function as target.
 *      --> Property Decorator Runs When The Property / Member Variables Are Defined Not When The Class is Instantiated.
 */


const Log = (target: any, propertyName: string) => {
    console.log('Log Property Decorator...');
    console.log(target, propertyName);
}

class Product {

    @Log
    private _title: string;
    private _price: number;

    @Log
    static classProperty = 'Here We Go';
    constructor(_title: string, _price: number) {
        this._title = _title;
        this._price = _price;
    }

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
}