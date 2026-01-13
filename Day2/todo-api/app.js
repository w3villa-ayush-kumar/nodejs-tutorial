const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const loggerMiddleware = require('./middlewares/logger.middleware');
const { notFound, errorHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/todos', todoRoutes);

app.get('/unauthorized', (req, res) => {
    res.status(401).json({ message: 'Unauthorized access' });
});

app.get('/error', () => {
    throw new Error('Forced server error');
});

app.get('/bad-gateway', (req, res) => {
    res.status(502).json({ message: 'Bad Gateway error' });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
