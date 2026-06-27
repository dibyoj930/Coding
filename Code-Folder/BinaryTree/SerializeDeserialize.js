var serialize = function(root) {
    if(!root)return "";
    let q=[root];
    let s="";
    while(q.length){
        let a=q.shift();
        if(a==null){
            s+="#,"
        }else{
            s+=a.val+","
        }
        if(a!=null){
            q.push(a.left);
            q.push(a.right);
        }
    }
    return s;
};

var deserialize = function(data) {
    if(data=="")return null;
    let val=data.split(",");
    let q=[];
    let root = new TreeNode(Number(val[0]));
    q.push(root);
    let i=1;
    while(q.length&&i<val.length){
        const newroot = q.shift();
        if(val[i]!=="#"){
            let left = new TreeNode(Number(val[i]));
            newroot.left=left;
            q.push(left);
        }
        i++;
        if(i<val.length&&val[i]!=="#"){
            let right = new TreeNode(Number(val[i]));
            newroot.right = right;
            q.push(right)
        }
        i++;
    }
    return root;

};