var maxDepth = function(root) {
    if(root===null)
        return 0
    let res=1
    const traverse=function(root,depth){
        // 到达叶节点，比较最大深度与当前深度
        if(!root.left&&!root.right){
            res=Math.max(res,depth)
            return
        }
        
        root.left&&traverse(root.left,depth+1)
        root.right&&traverse(root.right,depth+1)
    }
    traverse(root,1)
    return res
};
