/**
 * Generic V/S Union Types
 */
class DataStorage{
    private data: (string[] | number[] | boolean[])= [];

    /**
     * Union Means, We Can Pass Any Kind Of Values Specified By Union Type - But We Want Here Either string, number or boolean which can only be achieved by Generic Type.
     */

    addItem(item: string | number | boolean) {
        this.data.push(item);
    }

    removeItem(item: string | number | boolean) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage>();
textStorage.addItem('Abhishek');
textStorage.addItem('Dylan');
console.log(textStorage.getItems());
textStorage.removeItem('Dylan');
console.log(textStorage.getItems());

const numberStorage = new DataStorage();
numberStorage.addItem(55);
numberStorage.addItem(65);
console.log(numberStorage.getItems());
numberStorage.removeItem(55);
console.log(numberStorage.getItems());