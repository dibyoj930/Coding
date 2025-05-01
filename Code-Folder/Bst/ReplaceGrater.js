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
function insert(root,value,succ){
    if(root==null){
         root=new TreeNode(value);
    }
    if(root.val>value){
        succ.val=root.val;
        root.left=insert(root.left,value,succ);
    }else if(root.val<value){
        root.right=insert(root.right,value,succ)
    }
    return root;
}
function Replace(arr){
    let root=null;
    let n=arr.length;
    for(let i=n-1;i>=0;i--){
        let succ=new TreeNode(null);
        root=insert(root,arr[i],succ);
        console.log(succ)
        if(succ.val!=null){
            arr[i]=succ.val;
        }else{
            arr[i]=-1;
        }
    }
    return arr;
}
const res=Replace([8, 58, 71, 18, 31, 32, 63, 92, 
    43, 3, 91, 93, 25, 80, 28])
console.log(res)