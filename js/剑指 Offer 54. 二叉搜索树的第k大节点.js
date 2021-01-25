/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// `右中左`对二叉搜索树进行遍历
var kthLargest = function(root, k) {
    let count=0,res
    const traverse=function(root){
        if(res!==undefined)
            return
        root.right&&traverse(root.right)
        count++
        if(count===k){
            res=root.val
            return
        }
            
        root.left&&traverse(root.left)
    }
    traverse(root)
    return res
};
