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

// 叶节点：无左子树，无右子树
var pathSum = function(root, sum) {
    let res=[]
    let ans=[]
    if(root===null)
        return []
    const traverse=function(root,depth){
        // 到达叶节点
        if(root.left===null&&root.right===null){
            ans[depth]=root.val
            // 求和
            let pathSum=ans.slice(0,depth+1).reduce((sum,current)=>sum+=current,0)
            if(pathSum===sum)
                res.push(ans.slice(0,depth+1))
            return
        }

        ans[depth]=root.val
        root.left&&traverse(root.left,depth+1)
        root.right&&traverse(root.right,depth+1)
    }
    traverse(root,0)
    return res
};
