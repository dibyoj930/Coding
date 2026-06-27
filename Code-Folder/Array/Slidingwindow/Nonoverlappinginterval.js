var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[1]-b[1]);
    let i=0,j=1;
    let count=1;
    while(j<intervals.length){
         if(intervals[i][1]<=intervals[j][0]){
             i=j;
             count++;
         }
         j++;
    }
    return intervals.length-count;
 };
//  Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1