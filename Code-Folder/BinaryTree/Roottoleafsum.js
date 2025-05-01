var sumNumbers = function(root) {
    let que=[[root,root.val]];
    let total=0;
    while(que.length){
        let [a,val]=que.shift();
        if(!a.left&&!a.right){
         total+=val;
        }
        if(a.left)que.push([a.left,val*10+a.left.val])
        if(a.right)que.push([a.right,val*10+a.right.val])
    }
    return total
};
// Input: root = [4,9,0,5,1]
// Output: 1026