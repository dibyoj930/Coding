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

function LongestUnivalue(root){
    let level=0;
    function calculate(parent,current){
       
        if(current==null)return 0;
        let l=calculate(current.val,current.left);
        let r=calculate(current.val,current.right);
        level=Math.max(level,l+r);
        return current.val===parent?Math.max(l,r)+1:0
    }
    if(root!=null)calculate(root.val,root);
    return level
}
console.log(LongestUnivalue(arrayToBinaryTree([5,4,5,1,1,null,5])))