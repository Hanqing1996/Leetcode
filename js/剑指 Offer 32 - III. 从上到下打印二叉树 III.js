/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root===null)
        return []
    let queue=[root]
    let res=[]
    let count=1
    while(queue.length>0){
        let len=queue.length


        let temp=queue.slice().map(node=>node.val)

        if(count%2===1)
            res.push(temp)
        else
            res.push(temp.reverse())
        
        count++
        
        for(let i=0;i<len;i++){
            let parent=queue.shift()
            parent.left&&(queue.push(parent.left))
            parent.right&&(queue.push(parent.right))
        }
    }
    return res
};
