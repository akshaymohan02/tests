
const checkCamelCase= require('./checkCamelCase');

describe('Test for camelCase',()=>{
    it('One word',()=>{
        expect(checkCamelCase('akshay')).toBe(true)
    });
    it('three word',()=>{
        expect(checkCamelCase('theAkshayMohan')).toBe(true)
    });
    it('No string',()=>{
        expect(checkCamelCase('123#')).toBe(false)
    });
    it('String with space',()=>{
        expect(checkCamelCase('akshay Mohan')).toBe(false)
    });
    it('all caps',()=>{
        expect(checkCamelCase('AKSHAY')).toBe(false)
    });
});
