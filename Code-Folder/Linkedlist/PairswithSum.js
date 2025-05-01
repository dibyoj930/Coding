class Solution {
    // Function to find pairs in the linked list with the given sum
    findPairsWithGivenSum(head, target) {
         let ans=[];
        if(!head||!head.next)return ans;
        // code here
        let l=head;
        let r=head;
        while(r.next!=null){
            r=r.next;
        }
       
        while(l.data<r.data){
            if(l.data+r.data==target){
                ans.push([l.data,r.data]);
                l=l.next;
                r=r.prev;
            }else if(l.data+r.data<target){
                l=l.next;
            }else{
                r=r.prev;
            }
        }
        return ans;
    }
}
// Input:  
// 1 <-> 2 <-> 4 <-> 5 <-> 6 <-> 8 <-> 9
// target = 7
// Output: (1, 6), (2,5)