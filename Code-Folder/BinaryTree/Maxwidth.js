var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let q = [[root, 0]];
    let maxWidth = 0;

    while (q.length) {
        let sz = q.length;
        let first, last;
        let levelStartIndex = q[0][1]; // normalize to avoid overflow

        for (let i = 0; i < sz; i++) {
            let [node, index] = q.shift();
            let currIndex = index - levelStartIndex; // normalized index

            if (i === 0) first = currIndex;
            if (i === sz - 1) last = currIndex;

            if (node.left) q.push([node.left, 2 * currIndex]);
            if (node.right) q.push([node.right, 2 * currIndex + 1]);
        }

        let width = last - first + 1;
        maxWidth = Math.max(maxWidth, width);
    }

    return maxWidth;
};
// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7