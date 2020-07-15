const regtest = require("../regtest")
console.log(test)
describe('regular expression test A', () => {
    it('should return true', () => {
        expect(regtest('bb.rr','aabblrrccc')).toBe(true)
    })
})