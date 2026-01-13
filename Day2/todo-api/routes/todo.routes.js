const router = require('express').Router();
const {
    getTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
} = require('./todo.controller');

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
