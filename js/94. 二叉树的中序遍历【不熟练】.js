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
 * @return {number[]}
 */


/**
 * 中序遍历：[左,根,右]
 * 
 */
var inorderTraversal = function(root) {
    let inOrder=[]
    const traverse=function(root){
        if(root===null)
            return null
        const leftTree=root.left
        const rightTree=root.right
        if(leftTree!==null){
            traverse(leftTree)
        }
        inOrder.push(root.val)
        if(rightTree!==null){
            traverse(rightTree)
        }
        return
    }
    traverse(root)
    return inOrder
};
