var mirrorTree = function(root) {
    if(!root)
        return null
    const traverse=function(root){
        let originalLeft=root.left
        let originalRight=root.right
        root.right=originalLeft?traverse(originalLeft):null
        root.left=originalRight?traverse(originalRight):null
        return root
    }
    return traverse(root)
};
