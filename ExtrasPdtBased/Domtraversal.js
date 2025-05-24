var levelOrder = function(root) {
    if (!root) return [];
    
    let q = [root];
    let ans = [];

    while (q.length) {
        let size = q.length;
        let temp = [];

        for (let i = 0; i < size; i++) {
            let node = q.shift();
            temp.push(node);

            // Use .children for DOM elements
            for (let child of node.children) {
                q.push(child);
            }
        }

        ans.push(temp);
    }

    return ans;
};
