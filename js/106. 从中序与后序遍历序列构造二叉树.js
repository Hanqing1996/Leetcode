/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

/**
 * 中序：左根右
 * 后序：左右根
 */

var buildTree = function(inorder, postorder) {
    if(inorder.length===0)
        return null
    const traverse=function(currentIn,currentPost){
        // 前序+中序是shift,后序+中序是pop
        const rootValue=currentPost.pop()

        let root=new TreeNode(rootValue)
        let index=currentIn.indexOf(rootValue)
        const leftPart=currentIn.slice(0,index)
        const rightPart=currentIn.slice(index+1)

        // 因为后序是[左,右,根],所以这里先求右子树
        root.right=rightPart.length===0?null:traverse(rightPart,currentPost)
        root.left=leftPart.length===0?null:traverse(leftPart,currentPost)
        return root
    }   
    return traverse(inorder,postorder) 
};
