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
 * @return {boolean}
 */

// 左右
var hasPathSum = function(root, sum) {
    if(!root)
        return false
    let hasPath=false
    // preSum 为之前路径(以root为终点)的节点和
    const traverse=function(root,preSum,ifLeaf){
        // 已经找到路径，提前结束查找
        if(hasPath){
            return
        }
        if(root===null){
            // 路径和满足 sum 且最后一个节点是叶子节点
            if(preSum===sum&&ifLeaf){
                hasPath=true
            }
            return
        }

        // 需要判断当前节点是不是叶节点
        ifLeaf=!(root.left||root.right)
            
        // 这里的思路和回溯很像，只是回溯需要for循环遍历，这里只要遍历 left 和 right 两个分支
        traverse(root.left,preSum+root.val,ifLeaf)
        traverse(root.right,preSum+root.val,ifLeaf)
    }
    traverse(root,0,(root.left||root.right))
    return hasPath
};
