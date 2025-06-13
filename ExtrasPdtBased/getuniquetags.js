function getAllTagNames(root) {
    const tagSet = new Set();

    function traverse(node) {
        if (node.nodeType === 1) { // Only element nodes
            tagSet.add(node.tagName.toLowerCase());
            for (let child of node.children) {
                traverse(child);
            }
        }
    }

    traverse(root);

    return Array.from(tagSet);
}
