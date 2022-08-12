const cycleSort = require('./CycleSort');

describe('Test for cycleSort',()=>{
    it('pre sorted array test',()=>{
        expect(cycleSort([1,2,3,4,5])).toEqual([1,2,3,4,5])
    });
    it('unsorted array test',()=>{
        expect(cycleSort([10,-1,2,9,6])).toEqual([-1,2,6,9,10])
    });
    it('check for throw(array with an alphabet)', () => {
        expect(() => cycleSort([a,1,2])).toThrow();
      });
    
});