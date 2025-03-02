//print all the nodes that have k sum in a tree
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
function sum(root,path,k){
    if (!root) return 0;

    // Add the current node to the path
    path.push(root.val);

    // Check all the possible paths ending at the current node
    let f = 0;
    // let count =0;
    for (let i = path.length - 1; i >= 0; i--) {
        f += path[i];
        if (f === k) {
            // count++; if count needs to be tracked
            // If sum equals k, print the path from index `i` to the current node
            console.log(path.slice(i).join(' ')); // Join the path elements and print them
        }
    }

    // Recurse down the tree
    // count+=sum(root.left, path, k);
    // count+=sum(root.right, path, k);
    sum(root.left, path, k);
    sum(root.right, path, k);

    // Backtrack by removing the last element in the path
    path.pop();
    // return count
 }

function TrackKsum(root,k){
    let path=[];
    
    // return sum(root,path,k)
    sum(root,path,k);
}
const tree=arrayToBinaryTree([10,5,-3,3,2,null,11,3,-2,null,1])
TrackKsum(tree,8)