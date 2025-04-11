
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
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
var levelOrder = function(root) {
    if(!root)return [];
    let q=[root];
    let ans=[];
    
    while(q.length){
        console.log("queue->",q)
        let size=q.length;
        let temp=[];
        for(let i=0;i<size;i++){
            let data=q.shift();
            console.log("queue->after",q)
            temp.push(data.val)
          if(data.left)q.push(data.left);
        if(data.right)q.push(data.right);
        }
        
      ans.push(temp)
    }
    return ans;
};
console.log(levelOrder(arrayToBinaryTree([3,9,20,null,null,15,7])))