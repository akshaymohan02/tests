const beadSort = require('./BeadSort');

describe('Test for beadSort',()=>{
    it('pre sorted array test',()=>{
        expect(beadSort([1,2,3,4,5])).toEqual([1,2,3,4,5])
    });
    it('unsorted array test',()=>{
        expect(beadSort([10,0,2,9,6])).toEqual([0,2,6,9,10])
    });
    it('check for throw(-ve array)', () => {
        expect(() => beadSort([-1,2,3,-4])).toThrow();
      });
    
});
