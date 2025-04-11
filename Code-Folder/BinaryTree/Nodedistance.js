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
function Lowest(root,a,b){
   if(!root)return null;
   if(root.val==a || root.val==b)return root;
   let x=Lowest(root.left,a,b);
   let y=Lowest(root.right,a,b);
   if(x && y)return root;
   if(x)return x;
    return y;
}
function Find(root,x){
    if(!root)return 0;
    if(root.val==x)return 1;
    let left=Find(root.left,x);
    let right=Find(root.right,x);
    if (left || right) return left + right + 1;  // If found in either subtree, return the distance
    return 0;


}
function Distance(root,a,b){
    let Lca=Lowest(root,a,b);
    let a1=Find(Lca,a);
    let b1=Find(Lca,b);
    return a1+b1-2;

}
const tree=arrayToBinaryTree( [11, 22, 33, 44, 55, 66, 77])
console.log(Distance(tree,77,22))