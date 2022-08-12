
const isDivisible = require('./IsDivisible');

describe('Test for isDivisible with good inputs',()=>{
    it('Test for true output',()=>{
        expect(isDivisible(123498175,5)).toBe(true)
    });
    it('Test for false output',()=>{
        expect(isDivisible(99,5)).toBe(false)
    });
    
    
});
describe('Test for isDivisible with bad inputs',()=>{
    it('Test for divisibilty with 0',()=>{
        expect(isDivisible(110,0)).toBe(false);
    });
    it('Test for divisibilty with alphabet',()=>{
        expect(()=>isDivisible(110,a)).toThrow();
    })
})