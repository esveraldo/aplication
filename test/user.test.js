const supertest = require('supertest');

const server = require('../src/server');

test('Users', () => {
    return supertest(server).get('/users')
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('name', 'John Doe');
    });
});

test('Users post', () => {
    return supertest(server).post('/users')
    .send({name: 'Walter Mitty', email: 'walter@walter.com'})
    .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter Mitty');
    });
});