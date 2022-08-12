const mergeSort = require('./MergeSort');

describe('Test for mergeSort',()=>{
    it('pre sorted array test',()=>{
        expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5])
    });
    it('unsorted array test with odd no. of elements',()=>{
        expect(mergeSort([10,-1,2,9,6])).toEqual([-1,2,6,9,10])
    });
    it('unsorted array test with even no. of elements',()=>{
        expect(mergeSort([10,-1,2,9,6,11])).toEqual([-1,2,6,9,10,11])
    });
    it('unsorted array test with just 2 elements',()=>{
        expect(mergeSort([2,1])).toEqual([1,2])
    });
    it('check for throw(array with an alphabet)', () => {
        expect(() => mergeSort([a,1,2])).toThrow();
      });
    
});