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
function traverse(root){
    let ans = [];  // Initialize ans here
    if (!root) return ans;  // Return empty ans if root is null or undefined
    
    let q = [];
    q.push(root);
   
    if(!root)return ans;
    
    let f=1;
    while(q.length){
        let temp=[];
        let len = q.length;
        for(let i=0;i<len;i++){
            let t = q.shift();
       temp.push(t.val);
       if(t.left)q.push(t.left);
       if(t.right)q.push(t.right);
        }
       if(f%2==0)temp.reverse();
       ans.push(temp);
       f=!f
    }
    return ans;

}
console.log(traverse(arrayToBinaryTree([3,9,20,null,null,15,7])))