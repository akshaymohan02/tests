const perfectNumber = require('./PerfectNumber');

describe('Test for perfectNumber',()=>{
    it('test for perfect no. input',()=>{
        expect(perfectNumber(6)).toBe(true)
    });
    it('test for non perfect no.',()=>{
        expect(perfectNumber(8)).toBe(false)
    });
       
});