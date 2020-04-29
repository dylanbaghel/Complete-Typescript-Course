/**
 * Returning in a class decorator
 *  --> Returning in Method, Accessor Decorator Also Works
 */

const WithTemplate = (template: string, hookId: string) => {
    return <T extends {new (...args: any[]): {name: string}}>(originalConstructor: T) => {
        console.log('Without Class Instantiation...');
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super();
                console.log('Rendering Template...');
                const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.appendChild(document.createTextNode(this.name));
        }
            }
        }
    }
}

@WithTemplate('<h1>More Useful Decorators</h1>', 'root')
class Person3 {
    name = 'Abhishek';
}

const person = new Person3();