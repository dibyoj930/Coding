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

// Main function that finds all paths with sum k
function sum(root, path, k, result) {
    if (!root) return;

    path.push(root.val);

    let f = 0;
    for (let i = path.length - 1; i >= 0; i--) {
        f += path[i];
        if (f === k) {
            // Instead of printing, store the result
            result.push(path.slice(i)); // store a copy of the sub-path
        }
    }

    sum(root.left, path, k, result);
    sum(root.right, path, k, result);

    path.pop(); // backtrack
}

function TrackKsum(root, k) {
    let path = [];
    let result = [];

    sum(root, path, k, result);

    return result;
}

// Example usage:
const tree = arrayToBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(TrackKsum(tree, 8));
