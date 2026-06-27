var merge = function(intervals) {
    let res=[];
    intervals.sort((a,b)=>a[0]-b[0]);
    let prev = intervals[0];
    for(let i=1;i<intervals.length;i++){
        if(prev[1]>=intervals[i][0]){
            prev[1]=Math.max(prev[1],intervals[i][1]);
        }
        else{
            res.push(prev);
            prev=intervals[i]
        }
    }
    res.push(prev);
    return res;
};

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
