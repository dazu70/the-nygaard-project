var request = require('supertest');
var app = require('../app.js');

describe('GET /', () => {
  it('Should be status code 200', (done) => {
    request(app).get('/').expect(200, done)
  });
  it('Should have proper content', (done) => {
  	request(app).get('/')
  		.expect(/That was easy/, done);
  });
});

describe('GET /health',() => {
  it('Should be status code 200', (done) => {
    request(app).get('/health').expect(200, done)
  });
  it('Should have proper content',(done) => {
  	request(app).get('/health')
  		.expect(/STATUS/)
  		.expect(/UP/,done);
  });
});