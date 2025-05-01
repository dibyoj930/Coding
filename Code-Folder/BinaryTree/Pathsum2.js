function solve(root,targetSum,paths,path){
    if(!root)return;
    paths.push(root.val);
    if(!root.left&&!root.right&&targetSum==root.val){
        
        path.push([...paths]);
    
    }
    else{
        solve(root.left,targetSum-root.val,paths,path);
        solve(root.right,targetSum-root.val,paths,path);
    }
    paths.pop()
}
var pathSum = function(root, targetSum) {
    let path = [];
    

    solve(root,targetSum,[],path)

    return path;
};
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]