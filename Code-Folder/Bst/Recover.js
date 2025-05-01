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

function solve(root){
    let prev=null,first=null,second=null;
    Solution(root,prev,first,second)
    function Solution(root){
        if(!root)return;
        Solution(root.left);
        if(prev&&prev.val>root.val){
            
            if(!first){
                first=prev;
            }
            second=root;
        }
        console.log(first,second)
        prev=root;
        Solution(root.right)
        
    }
    Solution(root)
   if(first&&second){
    temp=first.val;
    first.val=second.val;
    second.val=temp
   }
    return root;
}
console.log(solve(arrayToBinaryTree([3,1,4,null,null,2])))