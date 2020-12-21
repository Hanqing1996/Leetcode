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

// 前序遍历:根左右
var preorderTraversal = function(root) {
    let res=[]
    if(!root)
        return []
    const traverse=function(root){
        res.push(root.val)
        let leftTree=root.left
        let rightTree=root.right
        leftTree&&traverse(leftTree)
        rightTree&&traverse(rightTree)
    }
    traverse(root)
    return res
};
