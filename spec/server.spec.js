import regtest from '../regtest.js'

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

describe('regular expression tests with ? special character',() => {
    it('should return true for beginning match',() => {
        expect(regtest('ab?cd?ef','acdefg')).toBe(true)
    })
    it('should return true for middle match', () => {
        expect(regtest('ab?cd?ef','lllllacdefggggg')).toBe(true)
    })
    it('should return true for end match', () => {
        expect(regtest('ab?cd?ef','lllllmmmacdef')).toBe(true)
    })
    it('should return false for beginning match', () => {
        expect(regtest('ab?cd?ef','aclllllll')).toBe(false)
    })
    it('should return false for middle match', () => {
        expect(regtest('ab?cd?ef', 'lllacllll')).toBe(false)
    })
    it('should return false for end match', () => {
        expect(regtest('ab?cd?ef', 'llaclllac')).toBe(false)
    })
})

describe('regular expression test with special character +', () => {
    it('should return true for beginning match', () => {
        expect(regtest('a+kkk','aaaakkkllll')).toBe(true)
    })
    it('should return true for middle match', () => {
        expect(regtest('akl+jj','akllllljj')).toBe(true)
    })
    it('should return true for end match', () => {
        expect(regtest('aklj+','jytuakljjjjjjj')).toBe(true)
    })
    it('should return false', () => {
        expect(regtest('a+','bbbkkcc')).toBe(false)
    })
})

describe('regular expression test with special character *', () => {
    it('should return true with repeating', () => {
        expect(regtest('ab*cddd','eeeabbbbbcdddeee')).toBe(true)
    })
    it('should return true without repeating', () => {
        expect(regtest('ab*cddd','eeeacdddllll')).toBe(true)
    })
    it('should return false',() => {
        expect(regtest('ab*cddd','eeeabddllll')).toBe(false)
    })

    describe('regular expressions tests with combinations of symbols', () => {
        it('should return true', () => {
            expect(regtest('a...b?cd?ef.', 'llla&&&cdef9llll')).toBe(true)
        })
        it('should return false', () => {
            expect(regtest('a...b?cd?ef.','lllacdllllll')).toBe(false)
        })
        it('should return true', () => {
            expect(regtest('a..b?cd?efa+','allcefaaaaa')).toBe(true)
        })
        it('should return false', () => {
            expect(regtest('a..b?cd?efa+','albcdef')).toBe(false)
        })
    })

    describe('regular expression tests for ^ special character', () => {
        it('should return true', () => {
            expect(regtest('^aaa','aaabbb')).toBe(true)
        })
        it('should return false', () => {
            expect(regtest('^aaa','caaadd')).toBe(false)
        })
    })

})