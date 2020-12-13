/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root)
        return []
    let ans=[]
    let res=[]
    const traverse=function(root,preSum,ifLeaf,depth){

        ifLeaf=!(root.left||root.right)
        ans[depth]=root.val
        
        if(ifLeaf&&preSum+root.val===sum){
            res.push(ans.slice(0,depth+1))
        }

        root.left&&traverse(root.left,preSum+root.val,ifLeaf,depth+1)
        root.right&&traverse(root.right,preSum+root.val,ifLeaf,depth+1)
    }
    traverse(root,0,!(root.left||root.right),0)
    return res
};
