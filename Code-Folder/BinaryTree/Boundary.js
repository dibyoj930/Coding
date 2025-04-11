//traverse the tree by boundary
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
// function Lefttree(root,ans){
//     if(!root)return;
//     if(root.left){
//         ans.push(root.val);
//         Lefttree(root.left,ans);
//     }
//     else if(root.right){
//         ans.push(root.val);
//         Lefttree(root.right,ans);
//     }
// }
// function Leaf(root,ans){
//     if(!root)return;
//     Leaf(root.left,ans);
//     if(!root.left&&!root.right){
//         ans.push(root.val);
//     }
//     Leaf(root.right,ans);
// }
// function RightTree(root,ans){
//     if(!root)return;
//     if(root.right){
//         RightTree(root.right,ans);
//         ans.push(root.val);
//     }
//     else if(root.left){
//         Lefttree(root.left,ans);
//         ans.push(root.val);
        
//     }
// }
function Lefttree(root,ans){
    if(!root)return;
    if(root.left){
        ans.push(root.val);
        Lefttree(root.left,ans);
    }
    else if(root.right){
        ans.push(root.right);
        Lefttree(root.right,ans)
    }
}
function RightTree(root,ans){
    if(!root)return;
    if(root.right){
        RightTree(root.right,ans);
        ans.push(root.val)
    }
    else if(root.left){
        RightTree(root.left,ans);
        ans.push(root.val)
    }
}
function Leaf(root,ans){
    if(!root)return;
    Leaf(root.left,ans);
    if(!root.left&& !root.right){
        ans.push(root.val)
    }
    Leaf(root.right,ans)
}
function traverseboundary(root){
    let ans=[];
    ans.push(root.val);
    Lefttree(root.left,ans);
    Leaf(root,ans);
    RightTree(root.right,ans)
    return ans;
}
console.log(traverseboundary(arrayToBinaryTree( ([1, 2, null, 4, 9, 6, 5, null, 3, null, null, null, null ,7, 8]))))
// [
//     1, 2, 4, 6,
//     5, 7, 8
//   ]