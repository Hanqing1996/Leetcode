var levelOrder = function(root) {
    if(root===null)
        return []
    let queue=[root]
    let res=[[root.val]]
    while(queue.length>0){
        let len=queue.length

        let level=[]

        for(let i=0;i<len;i++){
            let parent=queue.shift()
            parent.left&&(queue.push(parent.left),level.push(parent.left.val))
            parent.right&&(queue.push(parent.right),level.push(parent.right.val))
        }
        level.length>0&&res.push(level)
    }
    return res
};
