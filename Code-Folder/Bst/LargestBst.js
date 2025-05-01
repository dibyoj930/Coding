class Solution {
    solve(root,ans){
        if(!root)return [1,0,Infinity,-Infinity];
        if(!root.left && !root.right){
            return [1,1,root.key,root.key]
        }
        let l=this.solve(root.left,ans);
        let r=this.solve(root.right,ans);
        if(l[0]&&r[0]){
            if(root.key>l[3]&&root.key<r[2]){
                let x=l[2];
                let y=r[3];
                if(x==Infinity)x=root.key;
                if(y==-Infinity)y=root.key;
                return [1,l[1]+r[1]+1,x,y]
            }
        }
        return [0,Math.max(l[1],r[1]),0,0]
    }
    
    largestBst(root) {
        // code here
        let ans=[];
         ans=this.solve(root,ans);
        return ans[1];
    }
}
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
const tree = arrayToBinaryTree( [5, 2, 4, 1, 3]);
const sol=new Solution();
console.log(sol.largestBst(tree))