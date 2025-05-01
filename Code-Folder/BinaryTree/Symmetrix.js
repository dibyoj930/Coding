var isSymmetric = function(root) {
    const queue = [[root, root]];

    while (queue.length > 0) {
        const [t1, t2] = queue.shift();

        if (!t1 && !t2) continue;
        if (!t1 || !t2 || t1.val !== t2.val) return false;

        queue.push([t1.left, t2.right]);
        queue.push([t1.right, t2.left]);
    }

    return true;
};