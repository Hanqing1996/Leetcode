// 求左右子树最大深度
var isBalanced = function(root) {
    let res=true
    if(!root)
        return true
    const traverse=function(root){
        if(!res)
            return
        let leftMaxDepth=root.left?traverse(root.left):0
        let rightMaxDepth=root.right?traverse(root.right):0

        if(Math.abs(leftMaxDepth-rightMaxDepth)>1)
            res=false
        
        return Math.max(leftMaxDepth,rightMaxDepth)+1
    }
    traverse(root)
    return res
};
