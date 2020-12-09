/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(root===null)
        return root

    const swap=function(root){
        const temp=root.left
        root.left=root.right
        root.right=temp
    }

    const reverse=function(root){
        let leftTree=root.left
        let rightTree=root.right
        if(leftTree!=null)
            reverse(leftTree)
        if(rightTree!=null)
            reverse(rightTree)    
        swap(root)
    }
    reverse(root)
    return root
};
