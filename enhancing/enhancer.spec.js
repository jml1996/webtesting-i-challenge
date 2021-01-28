const { repair } = require('./enhancer.js');
const enhancer = require('./enhancer.js');
// test away!

test('sanity', () => {
    expect(3).toBe(3)
})

describe('item operations', () => {
    let item
    beforeEach(() => {
        item = {
            name: "", 
            durability: 0,
            enhancement: 0
        }
    })
    it('repairs', () => {
        expect(item.enhancement).toBe(0)
        expect(enhancer.repair(item).durability).toBe(100)
    })
    it('succeeds', () => {
        expect(item.enhancement).toBe(0)
        expect(enhancer.success(item).enhancement).toBe(1)
        item = {
            name: "", 
            durability: 0,
            enhancement: 20
        }
        expect(enhancer.success(item).enhancement).toBe(20)
    })
    it('fails', () => {
        item = {
            name: "", 
            durability: 6,
            enhancement: 6
        }
        expect(enhancer.fail(item).durability).toBe(1)
        item = {
            name: "", 
            durability: 60,
            enhancement: 15
        }
        expect(enhancer.fail(item).durability).toBe(50)
        item = {
            name: "", 
            durability: 60,
            enhancement: 18
        }
        expect(enhancer.fail(item).durability).toBe(50)
        expect(enhancer.fail(item).enhancement).toBe(17)
    })
})