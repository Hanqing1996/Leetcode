/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

/**
 * 遍历A,查找与B的根节点值一致的节点。然后同步遍历该节点和B,观察是否存在区别
 */
var isSubStructure = function(A, B) {
    if((A===null&&B!==null)||(B===null))
        return false

    let res=false
    let same=true
    const traverse=function(root){
        if(res)
            return

        if(root.val===B.val){
            same=true
            diff(root,B)
            same&&(res=true)
        }
        root.left&&traverse(root.left)
        root.right&&traverse(root.right)
    }

    const diff=function(rootA,rootB){

        // 发现两棵树不一样，及时退出递归
        if(same===false)
            return

        // rootB 为 null 时,rootA 的值无论是什么(null,非null)都无法证明两棵子数不同
        if(!rootB)
            return

        // rootB 不为null,则 rootA 必须非 null,且值与 rootB 一致，否则两棵子树不同
        if(!rootA||(rootA.val!=rootB.val)){
            same=false
            return
        }

        diff(rootA.left,rootB.left)
        diff(rootA.right,rootB.right)
    }

    traverse(A)
    return res
};



