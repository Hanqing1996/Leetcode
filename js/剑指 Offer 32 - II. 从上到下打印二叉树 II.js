var levelOrder = function(root) {
    if(root===null)
        return []
    let queue=[root]
    let res=[]
    while(queue.length>0){
        let len=queue.length

        // queue 目前只存储了上一层的所有节点
        res.push(queue.slice().map(node=>node.val))
        
        for(let i=0;i<len;i++){
            let parent=queue.shift()
            parent.left&&(queue.push(parent.left))
            parent.right&&(queue.push(parent.right))
        }
    }
    return res
};
