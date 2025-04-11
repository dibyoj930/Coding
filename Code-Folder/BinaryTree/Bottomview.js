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
function BottomView(root){
   
   let q=[];
   let map=new Map();
   let ans=[];

   q.push([root,0]);
   while(q.length>0){
    let [a,b]=q.shift();
    
    map.set(b,a.val);
    if(a.left){
        q.push([a.left,b-1])
    }
    if(a.right){
        q.push([a.right,b+1])
    }
   }
   let arr=Array.from(map.keys()).sort((a,b)=>a-b);
   for(let k of arr){
    ans.push(map.get(k))
   }
   return ans;
}

console.log(BottomView(arrayToBinaryTree([10, 20, 30, 40, 60, 90, 100])))
// [ 40, 20, 90, 30, 100 ]