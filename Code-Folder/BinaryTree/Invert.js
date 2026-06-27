var invertTree = function(root) {
    if(!root)return null;
    let q=[root];
    while(q.length){
        let a=q.shift();
        let temp=a.left;
        a.left=a.right;
        a.right=temp;
        if(a.left)q.push(a.left);
        if(a.right)q.push(a.right);
    }
    return root;
};