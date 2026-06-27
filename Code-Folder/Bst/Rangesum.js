function rangeSumBST(root, low, high) {
    if(!root)return 0;
    if(root.val<low)return rangeSumBST(root.right,low,high);
    if(root.val>high)return rangeSumBST(root.left,low,high);
    if(root.val>=low&&root.val<=high)return root.val+rangeSumBST(root.right,low,high)+rangeSumBST(root.left,low,high);
};
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23