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
var maxDepth = function(root) {
    if(root==null)
        return 0

    let ans=[]
    let res=0
    const traverse=function(root,depth){

        ans[depth]=root.val

        let ifLeaf=!(root.left||root.right)
        if(ifLeaf&&(depth+1)>res){
            res=depth+1
        }

        root.left&&traverse(root.left,depth+1)
        root.right&&traverse(root.right,depth+1)
    }
    traverse(root,0)
    return res
};
