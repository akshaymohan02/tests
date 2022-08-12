const romanToDecimal = require('./RomanToDecimal');

describe('Test for romanToDecimal',()=>{
    it('test for LXXXVIII == 88',()=>{
        expect(romanToDecimal('LXXXVIII')).toBe(88)
    });
    it('test for DCCC == 800',()=>{
        expect(romanToDecimal('DCCC')).toBe(800)
    });
    it('test for wrong format, IIII',()=>{
        expect(()=>romanToDecimal('IIII')).toThrow()
    });
    it('test for wrong format, IIX',()=>{
        expect(()=>romanToDecimal('IIX')).toThrow()
    });
       
});