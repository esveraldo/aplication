const supertest = require('supertest');
const server = require('../src/server');

test('Test server', () => {
    return supertest(server).get('/')
    .then((res) => {
        expect(res.status).toBe(200);
    });
});