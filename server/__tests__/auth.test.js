const request = require('supertest');
const db = require('../src/server/models');
const app = require('../src/app')();

const getUser = () => ({
  firstName: 'abcb',
  lastName: 'absda',
  displayName: 'aczx',
  password: 'Test1234',
  email: `test${Date.now()}@gmail.com`,
  role: 'customer',
});

const loginRoute = '/api/auth/sign-in'
const registerRoute = '/api/auth/sign-up'

const user = getUser();

const appRequest = request(app);

describe('sign up test', () => {
  beforeAll(() => {
    return db.sequelize.sync({ force: true });
  });
  afterAll(() => {
    return db.sequelize.close();
  });
  test('register user', async done => {
    const res = await appRequest.post(registerRoute).send(user);
    expect(res.statusCode).toBe(201);
    done();
  });
  test('login user', async done => {
    const res = await appRequest
      .post(loginRoute)
      .send({ email: user.email, password: user.password });
    expect(res.statusCode).toBe(200);
    done();
  });
  test('login user with empty body expect err', async done => {
    const res = await appRequest.post(loginRoute).send({});
    expect(res.statusCode).toBe(400);
    done();
  });
  test('login user with wrong params expect err', async done => {
    const res = await appRequest
      .post(loginRoute)
      .send({ email: 'abc', password: 'qwe' });
    expect(res.statusCode).toBe(400);
    done();
  });
  test('login user with trash params expect err', async done => {
    const res = await appRequest
      .post(loginRoute)
      .send({ abc:1 });
    expect(res.statusCode).toBe(400);
    done();
  });
});
