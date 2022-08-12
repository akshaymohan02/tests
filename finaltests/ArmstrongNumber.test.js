const armstrongNumber = require('./ArmstrongNumber');

describe('Test for armstrongNumber',()=>{
    it('test for true input',()=>{
        expect(armstrongNumber(370)).toBe(true)
    });
    it('test for false input',()=>{
        expect(armstrongNumber(560)).toBe(false);
        expect(armstrongNumber(-1)).toBe(false);
        expect(armstrongNumber('he')).toBe(false)
    });
       
});

