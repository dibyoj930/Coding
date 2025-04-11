//max sum of nodes where 2 nodes are not adjacent
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

function SumNode(root){
    
    
    const dp=new Map();
    function helper(root,dp){
        if(!root)return 0;
    if (dp.has(root)) return dp.get(root);
    let inc = root.val;
    if(root.left){
        inc+=SumNode(root.left.right)
        inc+SumNode(root.left.left)
    }
    if(root.right){
        inc+=SumNode(root.right.right);
        inc+=SumNode(root.right.left)
    }
    let exc =SumNode(root.left)+SumNode(root.right);
    const result = Math.max(inc, exc);
        dp.set(root, result);
        return result;
}
return helper(root,dp)
}
console.log(SumNode(arrayToBinaryTree([1,2,3,4,null,5,6])))