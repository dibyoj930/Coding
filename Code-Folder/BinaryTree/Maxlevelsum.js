
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
var maxLevelSum = function(root) {
    let q=[root];
    
    let max=-Infinity;
     let level=0;
     let main=0;

    while(q.length){
        let s=q.length;
        let sum=0;
       level++;
        for(let i=0;i<s;i++){
            let a=q.shift();
              sum+=a.val;
            if(a.left)q.push(a.left);
            if(a.right)q.push(a.right);
           

        }
        if(sum>max){
            max=sum;
            main=level;
        }
         
    }
    return main;
};
console.log(maxLevelSum(arrayToBinaryTree([1,7,0,7,-8,null,null])))
