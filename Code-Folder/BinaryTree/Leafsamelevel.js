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
function checksamelevel(root){
    let ma=[-1];
    let h=0;
    let ans=[1];
    function Check(root,ma,h){
        if(!root)return;
        if(ans[0]==0)return;
        if(!root.left&&!root.right){
            if(ma[0]==-1){
                ma[0]=h;
            }else{
                if(h!=ma[0]){
                    ans[0]=[0]
                }
            }
        }
        Check(root.left,ma,h+1);
        Check(root.right,ma,h+1);
    }
    Check(root,ma,h);
    return ans[0]==1;
}
console.log(checksamelevel(arrayToBinaryTree([1,2,3,4,5,6,7,9])))