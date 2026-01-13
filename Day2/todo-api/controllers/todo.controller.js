const todoService = require('../services/todo.service');
const logger = require('../config/logger');

exports.createTodo = (req, res) => {
    const { title, completed = false } = req.body;

    if (!title) {
        logger.warn('Title missing');
        return res.status(400).json({ message: 'Title is required' });
    }

    const todo = todoService.createTodo(title, completed);
    logger.info('Todo created');
    res.status(201).json(todo);
};

exports.getTodos = (req, res) => {
    res.status(200).json(todoService.getTodos());
};

exports.getTodo = (req, res) => {
    const todo = todoService.getTodoById(parseInt(req.params.id));
    if (!todo) {
        logger.warn('Todo not found');
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
};

exports.updateTodo = (req, res) => {
    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const todo = todoService.updateTodo(
        parseInt(req.params.id),
        title,
        completed
    );

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(todo);
};

exports.deleteTodo = (req, res) => {
    const deleted = todoService.deleteTodo(parseInt(req.params.id));
    if (!deleted) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
};
