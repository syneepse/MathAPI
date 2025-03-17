import request from 'supertest';
import {server} from '../src/index';

describe('Math APIs', ()=> {

  afterAll(async () => {
    server.close();
  });
  
  it('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
  it('GET /logs', async () => {
    const response = await request(server).get('/logs');
    expect(response.status).toBe(200);
  });
  it('GET /logs/:id', async () => {
    const response = await request(server).get('/logs/1');
    expect(response.status).toBe(200);
  });

  // it('PUT /logs/:id/:path/:query', async () => {
  //   const response = await request(server).put('/logs/1/path/query');
  //   expect(response.status).toBe(200);
  // });
  // it('DELETE /logs/:id', async () => {
  //   const response = await request(server).delete('/logs/1');
  //   expect(response.status).toBe(200);
  // });
  it('GET /factorial/:n', async () => {
    const response = await request(server).get('/factorial/5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"value": "120"});
  });

  it('GET /fibonaci/:n', async () => {
    const response = await request(server).get('/fibonaci/5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"value": "5"});
  });

  it('GET /sum/:a/:b', async () => {
    const response = await request(server).get('/sum/5/5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"value": "10"});
  });

  it('GET /product/:a/:b', async () => {
    const response = await request(server).get('/product/5/5');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"value": "25"});
  });

})