const express = require('express');
const logger = require('./logger');

const app = express();
app.use(express.json());

let todos = [];
let idCount = 1;

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

app.post('/todos', (req, res) => {
    try {
        const { title, completed = false } = req.body;

        if (!title) {
            logger.warn('Title missing');
            return res.status(400).json({ message: 'Title is required' });
        }

        const todo = { id: idCount++, title, completed };
        todos.push(todo);

        logger.info('Todo created');
        res.status(201).json(todo);

    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        logger.warn('Todo not found');
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
});

app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    todo.title = title;
    todo.completed = completed;
    res.status(200).json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(index, 1);
    res.status(200).json({ message: 'Todo deleted successfully' });
});

app.get('/unauthorized', (req, res) => {
    res.status(401).json({ message: 'Unauthorized access' });
});

app.get('/error', (req, res) => {
    throw new Error('Forced server error');
});

app.get('/bad-gateway', (req, res) => {
    res.status(502).json({ message: 'Bad Gateway error' });
});

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: 'Route not found'
    });
});

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(3000, () => {
    logger.info('Server running on port 3000');
});
