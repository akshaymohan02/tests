const averageMedian = require('./AverageMedian');

describe('Test for averageMedian',()=>{
    it('median of array with all the same elements',()=>{
        expect(averageMedian([2,2,2,2])).toEqual(2)
    });
    it('median of array with odd no. of elements',()=>{
        expect(averageMedian([1,2,-5,6,8])).toEqual(2)
    });
    it('median of array with even no. of elements',()=>{
        expect(averageMedian([10,-1,2,9,6,11])).toEqual(7.5)
    });
    
    it('check for throw(array with an alphabet)', () => {
        expect(() => averageMedian([a,1,2])).toThrow();
      });
    
});