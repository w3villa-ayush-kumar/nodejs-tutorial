let todos = [];
let idCount = 1;

exports.resetTodos = () => {
    todos = [];
    idCount = 1;
};

exports.createTodo = (title, completed = false) => {
    const todo = {
        id: idCount++,
        title, completed
    };
    todos.push(todo);
    return todo;
};

exports.getTodos = () => todos;

exports.getTodoById = (id) =>
    todos.find(t => t.id === id);

exports.updateTodo = (id, title, completed) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;

    todo.title = title;
    todo.completed = completed;
    return todo;
};

exports.deleteTodo = (id) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return false;

    todos.splice(index, 1);
    return true;
};
