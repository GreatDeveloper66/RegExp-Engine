//import { test } from "./test";
const { test } = require(".../test")
describe('regular expression test A', () => {
    it('should return true', () => {
        expect(test('bb.rr','aabblrrccc')).toBe(true)
    })
})