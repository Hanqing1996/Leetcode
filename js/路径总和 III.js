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
 * @param {number} sum
 * @return {number}
 */

// 递归的边界条件仍然是到达叶节点不变
// 在查找过程中，记录当前路径的各节点对应前缀和
// 得到包含当前节点的前缀和后，计算 prefixSum-sum 对应的前缀和在当前路径中有几组
var pathSum = function(root, sum) {
    if(root==null)
        return 0

    let res=0
    let cache={0:1}// 比如只有一个根节点100，而sum=100,为了兼容此情况，需要将 cache 初始值设置为 {0:1}    
    const traverse=function(root,prefixSum){

        let current=prefixSum+root.val
        let targetPrefixSum=current-sum

        cache[targetPrefixSum]&&(res+=cache[targetPrefixSum])

        // 缓存当前节点对应的前缀和
        cache[current]=(cache[current]|0)+1

        root.left&&traverse(root.left,current)
        root.right&&traverse(root.right,current)    

        // 缓存每次只对一条路径有效,当前节点子路径查询完毕后需要清理节点对应缓存
        cache[current]-=1
    }
    traverse(root,0)
    return res
};
