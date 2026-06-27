var insert = function(intervals, newInterval) {
    let i=0;
    let res=[];
    while(i<intervals.length&&intervals[i][1]<newInterval[0]){
        res.push(intervals[i]);
        i++;
    }
    while(i<intervals.length&&intervals[i][0]<=newInterval[1]){
         newInterval[0]=Math.min(intervals[i][0],newInterval[0]);
         newInterval[1]=Math.max(intervals[i][1],newInterval[1]);
        
         i++;
    }
    res.push(newInterval)
    while(i<intervals.length){
        res.push(intervals[i]);
        i++;
    }
    return res;

};
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]