var buildTree = function(preorder, inorder) {
  if(preorder.length===0)
    return null
  const traverse=function(currentIn){
      const rootValue=preorder.shift()
      let root=new TreeNode(rootValue)

      // 找到 preorder 首元素在 inorder 中的索引，从而划分出左右子树
      const index=currentIn.indexOf(rootValue)
      const leftPart=currentIn.slice(0,index)
      const rightPart=currentIn.slice(index+1)
      //
      root.left=leftPart.length===0?null:traverse(leftPart)
      root.right=rightPart.length===0?null:traverse(rightPart)
      return root
  }
  return traverse(inorder)
};
