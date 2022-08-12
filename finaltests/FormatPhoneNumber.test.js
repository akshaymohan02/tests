const formatPhoneNumber = require('./FormatPhoneNumber');

describe('Test for formatPhoneNumber',()=>{

    it('test with valid phone number ',()=>{
        expect(formatPhoneNumber("2265821234")).toEqual('(226) 582-1234')
    });
      


    it('test with more than 10 digits ',()=>{
        expect(()=>formatPhoneNumber('012265821234')).toThrow();
        
    });
    it('test with less than 10 digits ',()=>{
        expect(()=>formatPhoneNumber('2123')).toThrow();
        
    });
       
    it('test with some alphabetic chars ',()=>{
        expect(()=>formatPhoneNumber('226582a234')).toThrow();
        
    });
       
});