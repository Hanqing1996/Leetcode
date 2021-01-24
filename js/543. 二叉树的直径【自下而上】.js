/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// 左子树最大长度+右子树最大长度+1(根节点)
var diameterOfBinaryTree = function(root) {
    if(!root)
        return null
    let res=0
    const traverse=function(root){
        
        let leftValue=root.left?traverse(root.left):0
        let rightValue=root.right?traverse(root.right):0

        let temp=leftValue+rightValue
        res=Math.max(res,temp)

        return Math.max(leftValue,rightValue)+1
    }
    traverse(root)
    return res
};
