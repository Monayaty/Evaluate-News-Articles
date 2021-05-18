// : import the url check function
// const validator = require('../src/client/js/urlValidator');
import {checkURL} from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkUrl).toBeDefined()
    })

    // test("This URL is valid", () => {
    //     expect(validator('https://www.bbc.com/news/av/world-europe-57159296')).toBe(true);
    // });

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkUrl('Monaya')).toBe(false)
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkUrl('http://example.com')).toBeTruthy()
    })
})
