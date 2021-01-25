/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root)
        return null
    let isValid=true
    let pre
    const traverse=function(root){
        root.left&&traverse(root.left)

        if(!pre)
            pre=root
        else{
            if(pre.val>=root.val)
                isValid=false
            pre=root
        }
        root.right&&traverse(root.right)
    }
    traverse(root)
    return isValid
};
