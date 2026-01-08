const express = require('express');
const app = express();

app.use(express.json());

let todos = [];
let idCount = 1;



app.post('/todos', (req, res) => {
    const { title, completed = false } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const todo = {
        id: idCount++,
        title,
        completed
    };
    todos.push(todo);
    res.status(201).json(todo);
});


app.get('/todos', (req, res) => {
    res.json(todos);
});


app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
});


app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { title, completed } = req.body;
    todo.title = title;
    todo.completed = completed;
    res.json(todo);
});


app.delete('/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted successfully' });
});


app.listen(3000, () => {
    console.log('server is on');
});
