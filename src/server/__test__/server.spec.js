// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'

const request = require('supertest')
const {app} = require('../index')
describe('Server Test', () => {
    // : add your test cases to test server
    test('Redirect To index.html', (done) => {
        request(app)
          .get('/')
          .send('./dist/index.html')
          .then((response) => {
            expect(response.statusCode).toEqual(200)
            done()
          })
      })
 })
