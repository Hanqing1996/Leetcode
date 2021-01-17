/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// 把空节点都填充上也放进 queue 是行不通的，会超时
// 应该记录完全二叉树节点下标（注意防止溢出）
var widthOfBinaryTree = function(root) {

    const maxNumber = Math.pow(2, 32)-1

    let queue=[]
    if(!root)
        return 0
    let res=undefined;
    queue.push([root,1])
    while(queue.length){
        let len=queue.length;

        let start=queue[0][1]
        let end=queue[len-1][1]
        
        res=res?Math.max(res,(end-start+1)%maxNumber):(end-start+1)%maxNumber

        for(let i=0;i<len;i++){
            let temp=queue.shift()
            let parentNode=temp[0]
            let parentIndex=temp[1]
            
            parentNode.left&&queue.push([parentNode.left,(parentIndex*2)%maxNumber])
            parentNode.right&&queue.push([parentNode.right,(parentIndex*2+1)%maxNumber])
        }
    }
    return res
};
