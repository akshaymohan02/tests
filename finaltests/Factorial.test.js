
const factorial = require('./Factorial');

describe("Test for factorial",()=>{
    it('test for factorial of 0',()=>{
        expect(factorial(0)).toBe(1);
    })
    it('test for factorial of 5',()=>{
        expect(factorial(5)).toBe(120);
    })
    it('test for factorial of -1 i.e -ve number',()=>{
        expect(()=>factorial(-1)).toThrow();
        //as the factorial of negative number is undefined or in infinity
    })
})