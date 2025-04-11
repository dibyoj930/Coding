function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function arrayToBinaryTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}
function Topview(root){
    let m=new Map();
    let q=[];
    q.push([root,0]);
    while(q.length>0){
        let curr = q.shift();
        let node=curr[0];
        let level=curr[1];
        if(!m.has(level)){
            m.set(level,node.val);
        }
        if(node.left){
            q.push([node.left,level-1])
        }
        if(node.right){
            q.push([node.right,level+1])
        }

    }
    let ans=[];
    let key = Array.from(m.keys()).sort((a,b)=>a-b);
    for(let k of key){
        ans.push(m.get(k))
    }
    return ans;
}

console.log(Topview(arrayToBinaryTree([10, 20, 30, 40, 60, 90, 100])))