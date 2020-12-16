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
var sumNumbers = function(root) {
    if(root==null)
        return 0

    let ans=[]
    let sum=0
    const dfs=function(root,depth){

        ans[depth]=root.val
        let ifLeaf=!(root.left||root.right)
        if(ifLeaf){
            // 到达叶节点，求和
            let current=Number(ans.slice(0,depth+1).join(''))
            sum+=current
        }
        root.left&&dfs(root.left,depth+1)
        root.right&&dfs(root.right,depth+1)

    }
    dfs(root,0)
    return sum
};
