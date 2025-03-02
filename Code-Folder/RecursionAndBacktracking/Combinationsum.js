// Time complexity:
// O(2 
// n
//  ), where n is the number of candidates. This is because in the worst case scenario, the function will generate all possible combinations of the candidates to find the ones that sum up to the target. For each candidate, there are 2 possibilities - either include it in the combination or not. This leads to a branching factor of 2 at each step of the recursion

// Space complexity:
// O(n), where n is the depth of the recursion stack, which is determined by the number of candidates that can be used to sum up to the target.

function Combination(candidates,target){
     candidates.sort((a,b)=>a-b);
     const res=[];
     function backtrack(start,curr,target){
          if(target==0){
            res.push([...curr])
            return;
          }
          for(let i=start;i<candidates.length;i++){
            if(candidates[i]>target){
                break;
            }
            curr.push(candidates[i]);
            backtrack(i,curr,target-candidates[i]);
            curr.pop();
          }
     }
     backtrack(0,[],target);
     return res;
}
console.log(Combination([2,3,5],7))