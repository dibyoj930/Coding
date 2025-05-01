// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// // Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

var twoCitySchedCost = function(costs) {
    costs.sort((x,y)=>(x[0]-x[1])-(y[0]-y[1]));
    let mid=costs.length/2;
    return costs.reduce((acc,curr,index)=>{
        if(index<mid)return acc+curr[0];
        else
        return acc+curr[1]
    },0)
    };
    // Input: costs = [[10,20],[30,200],[400,50],[30,20]]
    // Output: 110