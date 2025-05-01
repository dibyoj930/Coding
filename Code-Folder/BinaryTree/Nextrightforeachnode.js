// Corrected TreeNode constructor
function TreeNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
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

// Populate next right pointers (perfect binary tree assumption)
function nextRight(root) {
    if (!root) return;

    let levelStart = root;

    while (levelStart.left) {
        let current = levelStart;

        while (current) {
            current.left.next = current.right;
            if (current.next) {
                current.right.next = current.next.left;
            }
            current = current.next;
        }

        levelStart = levelStart.left;
    }
}

// Utility to print tree levels with next pointers
function printNextPointers(root) {
    let level = root;
    while (level) {
        let current = level;
        let line = "";
        while (current) {
            line += current.val + " -> ";
            current = current.next;
        }
        console.log(line + "null");
        level = level.left;
    }
}

const treeRoot = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7]);
nextRight(treeRoot);
printNextPointers(treeRoot);
