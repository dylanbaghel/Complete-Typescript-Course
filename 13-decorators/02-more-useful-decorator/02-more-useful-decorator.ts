/**
 * More Useful Decorator
 */

const withTemplate = (template: string, hookId: string) => {
    return (constructor: any) => {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            const person = new constructor();
            hookEl.appendChild(document.createTextNode(person.name));
        }
    }
}

@withTemplate('<h1>More Useful Decorators</h1>', 'root')
class Person {
    name = 'Abhishek';
}