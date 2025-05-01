var nextLargerNodes = function(head) {
    let q=[];
    let curr=head;
    while(curr!=null){
        q.push(curr.val);
        curr=curr.next;
    }
    let ans=new Array(q.length).fill(0);
    let s=[];
    for(let i=0;i<q.length;i++){
        // let a=s.pop();
        while(s.length&&q[s[s.length-1]]<q[i]){
           ans[s[s.length-1]]=q[i];
           s.pop();
        }  
        s.push(i);
    }
    return ans;
};
// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]