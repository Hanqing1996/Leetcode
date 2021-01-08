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
 * @return {number}
 */

/**
 * 非空二叉树->至少包含一个节点;
 * 自下往上，求当前根节点的左子树为起点的最大路径和（思路类似 53. 最大子序和,详见 https://github.com/Hanqing1996/Leetcode/blob/master/js/53.%20%E6%9C%80%E5%A4%A7%E5%AD%90%E5%BA%8F%E5%92%8C.js）和右子树为起点的最大路径和。取两者中的最大者
 * 
 *  
 */



var maxPathSum = function(root) {
    let res

    const traverse=function(root){
        let leftMaxSum=root.left?traverse(root.left):0
        let rightMaxSum=root.right?traverse(root.right):0

        leftMaxSum<0&&(leftMaxSum=0)
        rightMaxSum<0&&(rightMaxSum=0)

        let temp=root.val+leftMaxSum+rightMaxSum
        res=res===undefined?temp:Math.max(res,temp)
        return root.val+Math.max(leftMaxSum,rightMaxSum)
    }
    traverse(root)
    return res
};
