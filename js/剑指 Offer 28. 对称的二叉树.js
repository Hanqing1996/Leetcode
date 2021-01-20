/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root===null)
        return true

    let symmetric=true
    const diff=function(rootA,rootB){
        if(!symmetric)
            return
        
        if(rootA===null&&rootB===null)
            return

        if((rootA===null&&rootB!==null)||(rootA!==null&&rootB===null)||(rootA.val!==rootB.val))
            symmetric=false

        if(!symmetric)
            return
        
        rootA&&diff(rootA.left,rootB.right)
        rootA&&diff(rootA.right,rootB.left) 
    }
    diff(root.left,root.right)
    return symmetric
};
