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

// Function to find the inorder predecessor
function inpre(root) {
    let p = root.left;
    console.log(root.val)
    while (p && p.right) {
        p = p.right;
    }
    return p;
}

// Function to find the inorder successor
function insuc(root) {
    let q = root.right;
    console.log(root.val)
    while (q && q.left) {
        q = q.left;
    }
    return q;
}

// Function to find the predecessor and successor of a given key
function Successor(root, key, result) {
    if (!root) return;

    if (root.val === key) {
        console.log(root.val)
        if (root.left) result.pre = inpre(root);
        if (root.right) result.suc = insuc(root);
        return;
    }

    if (key > root.val) {
        
        result.pre = root;
        Successor(root.right, key, result);
    } else if (key < root.val) {
      
        result.suc = root;
        Successor(root.left, key, result);
    }
}

// Example usage:
let tree = arrayToBinaryTree( [10, 2, 11, 1, 5, null, null, null, null, 3, 6, null, 4, null, null]);
let result = { pre: null, suc: null };  // Object to hold the predecessor and successor
Inorder(tree, 10, result);

console.log("Predecessor:", result.pre ? result.pre.val : -1);
console.log("Successor:", result.suc ? result.suc.val : -1);



// function Inorder(root,key,res){
//       if(!root)return;

//       if(root.val==key){
//         if(root.left)res.pre=inpre(root);
//         if(root.right)res.suc=insuc(root);
//         return
//       }
//       if(key<root.val){
//         res.suc=root;
//         Inorder(root.left,key,res);
//       }
//       if(key>root.val){
//         res.pre=root;
//         Inorder(root.right,key,res);
//       }
// }
