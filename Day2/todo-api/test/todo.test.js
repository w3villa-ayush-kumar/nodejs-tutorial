const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Todo app test', () => {

    beforeEach(() => {
        app.resetTodos();
    });

    it('should create a new todo', async () => {
        const res = await request(app)
            .post('/todos')
            .send({ title: 'testing' });

        expect(res.status).to.equal(201);
        expect(res.body.title).to.equal('testing');
    });

    it('should not create todo without title', async () => {
        const res = await request(app)
            .post('/todos')
            .send({});

        expect(res.status).to.equal(400);
    });

    it('should get all todos', async () => {
        await request(app)
            .post('/todos')
            .send({ title: 'test title' });
        const res = await request(app).get('/todos');

        expect(res.body.length).to.equal(1);
    });

    it('should update a todo', async () => {
        const create = await request(app)
            .post('/todos')
            .send({ title: 'test tittle' });

        const res = await request(app)
            .put(`/todos/${create.body.id}`)
            .send({ title: 'test title' });

        expect(res.body.title).to.equal('test title');
    });

    it('should delete a todo', async () => {
        const create = await request(app)
            .post('/todos')
            .send({ title: 'test title' });

        const res = await request(app)
            .delete(`/todos/${create.body.id}`);

        expect(res.body.message).to.equal('Todo deleted successfully');
    });
});
