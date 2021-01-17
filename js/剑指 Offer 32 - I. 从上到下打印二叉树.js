var levelOrder = function(root) {
    if(root===null)
        return []
    let queue=[root]
    let res=[]
    while(queue.length>0){
        let len=queue.length
        for(let i=0;i<len;i++){
            let parent=queue.shift()
            res.push(parent.val)
            parent.left&&queue.push(parent.left)
            parent.right&&queue.push(parent.right)
        }
    }
    return res
};
