/**
 * Generic Classes
 */
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Abhishek');
textStorage.addItem('Dylan');
console.log(textStorage.getItems());
textStorage.removeItem('Dylan');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(55);
numberStorage.addItem(65);
console.log(numberStorage.getItems());
numberStorage.removeItem(55);
console.log(numberStorage.getItems());