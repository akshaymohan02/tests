const quickSelectSearch = require('./QuickSelectSearch');

describe('Test for quickSelectSearch',()=>{
    const arr = [1121111, 21, 333, 41, 5, 66, 7777, 28, 19, 11110]

    it('test with k=5 on an array ',()=>{
        expect(quickSelectSearch(arr, 5)).toEqual([ 19, 21, 28, 41, 5, 66, 333, 11110, 1121111, 7777 ])
    });
    it('test with k=0 on an array',()=>{
        expect(quickSelectSearch(arr, 0)).toEqual([5, 19,21, 41, 28,333, 11110,1121111,7777,66])
    });
    it('test with k=9(length of the array) on an array',()=>{
        expect(quickSelectSearch(arr, 9)).toEqual([5,19, 21, 41,28,66,333, 7777, 11110,1121111])
    });


    it('test with k>arr.length',()=>{
        expect(()=>quickSelectSearch(arr,11)).toThrow();
        
    });
       
});
