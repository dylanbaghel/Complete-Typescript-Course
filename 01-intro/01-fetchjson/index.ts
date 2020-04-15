// Compile TS File Using - tsc file_name

import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean
}

axios.get(url)
    .then(response => {
        const todo = response.data as Todo;
        const { id, title, completed } = todo;

        logTodo(id, title, completed);
    });

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo With ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`);
}