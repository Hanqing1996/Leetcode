/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/**
 * 前序：根左右
 * 中序：左根右
 * 
 * 时间复杂度：总共需要构建N个节点，求每个节点在中序数组中的位置时间复杂度又为o(n),所以时间复杂度总计为o(n^2)

var buildTree = function(preorder, inorder) {
  if(preorder.length===0)
    return null
  const traverse=function(currentPre,currentIn){
      const rootValue=currentPre.shift()
      let root=new TreeNode(rootValue)

      // 找到 preorder 首元素在 inorder 中的索引，从而划分出左右子树
      const index=currentIn.indexOf(rootValue)
      const leftPart=currentIn.slice(0,index)
      const rightPart=currentIn.slice(index+1)
      //
      root.left=leftPart.length===0?null:traverse(currentPre,leftPart)
      root.right=rightPart.length===0?null:traverse(currentPre,rightPart)
      return root
  }
  return traverse(preorder,inorder)
};
