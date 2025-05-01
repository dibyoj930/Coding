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
function insuc(root){
    let p=root.right;
    while(p.left)p=p.left;
    return p;
}

function DeleteNode(root,key){
    if(!root)return;
    if(key<root.val){
        root.left = DeleteNode(root.left,key);
    }
    else if(key>root.val){
        root.right = DeleteNode(root.right,key)
    }
    else{
        if(!root.left){
            return root.right;
        }
        else if(!root.right){
           return root.left;
        }
        else{
            let temp=insuc(root);
           
            let newtemp=root.val;
            root.val=temp.val;
            temp.val=newtemp;
            
            root.right = DeleteNode(root.right,key)
        }
    }
    return root;
}
function binaryTreeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // To remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}
const tree=arrayToBinaryTree([5,3,6,2,4,null,7]);
const res=DeleteNode(tree,3)
const res2=DeleteNode(arrayToBinaryTree([5,3,6,2,4,null,7]),0)
console.log(res);
console.log(binaryTreeToArray(res));
console.log(binaryTreeToArray(res2));