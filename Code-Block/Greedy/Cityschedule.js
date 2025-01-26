// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
// costs = [[10,20],[30,200],[400,50],[30,20]]
//need to find out how to distribute te people to have the minimul costs
const City=(arr)=>{
    arr.sort((x,y)=>(x[0]-x[1])-(y[0]-y[1]));
    let mid=arr.length/2;
    return arr.reduce((acc,curr,index)=>{
        if(index<mid)return curr[0]+acc;
        else
        return curr[1]+acc;
    },0)
}

console.log(City([[10,20],[30,200],[400,50],[30,20]]))


//approach is greedy 