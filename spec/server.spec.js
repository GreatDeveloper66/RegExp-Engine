const regtest = require("../regtest")
console.log(test)
describe('regular expression tests with literal characters', () => {
    it('should return true for beginning match', () => {
        expect(regtest('bblrr','bblrrcccaa')).toBe(true)
    })

    it('should return true for middle match', () => {
        expect(regtest('bblrr', 'aaabblrrbblr')).toBe(true)
    })

    it('should return true for end match', () => {
        expect(regtest('bblr', 'aazsfhbblr')).toBe(true)
    })

    it('should return false for beginning match', () => {
        expect(regtest('bblr', 'bb&randomstuff')).toBe(false)
    })

    it('should return false for middle match', () => {
        expect(regtest('bblrr', 'randombb&stuff')).toBe(false)
    })

    it('should return false for end match', () => {
        expect(regtest('bblrr', 'randombb&rrandomstuff')).toBe(false)
    })
})