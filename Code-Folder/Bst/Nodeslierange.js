function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Convert an array to a binary tree
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
function Nodeslie(root,l,h){
    if(!root)return 0;
    if(root.val>=l&&root.val<=h){
        return 1+Nodeslie(root.left,l,h)+Nodeslie(root.right,l,h)
    }
    if(root.val<l){
        return Nodeslie(root.right,l,h);
    }
    else if(root.val>h){
        return Nodeslie(root.left,l,h)
    }
}
const tree=arrayToBinaryTree( [10, 5, 50, 1, null, 40, 100])
console.log(Nodeslie(tree,5,45))
// console.log(Nodeslie(arrayToBinaryTree( [10, 5, 50, 1, null, 40, 100]),10,100))
// console.log(Nodeslie( arrayToBinaryTree([1, 2, 3]),23,95))
//Tc-> O(N) Sc-> O(N)