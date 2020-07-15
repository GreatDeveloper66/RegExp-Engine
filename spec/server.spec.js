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

describe('regular expression tests with wildcard characters', () => {
    it('should return true for beginning match', () => {
        expect(regtest('bb..rr','bb&&rrrandomstuff')).toBe(true)
    })
    it('should return true for middle match', () => {
        expect(regtest('bb..rr', 'randombb&&rrstuff')).toBe(true)
    })
    it('should return true for end match', () => {
        expect(regtest('bb..rr','aaaaaaaabb&&rr')).toBe(true)
    })
    it('should return false for beginning match', () => {
        expect(regtest('bb..rr', 'b&&rrlllll')).toBe(false)
    })
    it('should return false for middle match', () => {
        expect(regtest('bb.rr','lllllbb&&ryyy')).toBe(false)
    })
    it('should return false for end match', () => {
        expect(regtest('bb.rr','lllllbb&')).toBe(false)
    })
})

