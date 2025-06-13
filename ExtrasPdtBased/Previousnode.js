function previousLeftSibling(root, target) {
    const queue = [root];

  while (queue.length) {
    const len = queue.length;
    let prev = null;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node === target) return prev;
      queue.push(...node.children);
      prev = node;
    }
  }

  return null;
}
// https://cdn.bfe.dev/bfe/img/2a737BvrqUaK1F9YnxrD1JkYV58y8Le8_1063x546_1621897998092.png