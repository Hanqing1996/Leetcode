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

// BFS

// 参考自 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution 
var levelOrder = function(root) {
    let res=[]
    let queue=[]
    if(root==null)
        return []

    queue.push(root)
    while(queue.length>0){

        res.push(queue.map(node=>node.val).slice())
        // 保证每一次 while 里的迭代都是新一层节点的遍历
        let len=queue.length
        for(let i=0;i<len;i++){
            
            // 祛除上一层的旧节点，放入这一层的新节点
            let node=queue.shift()

            const leftTree=node.left
            const rightTree=node.right

            if(leftTree!=null){
                queue.push(leftTree)
            }
            
            if(rightTree!=null){
                queue.push(rightTree)  
            }
        }
    }
    return res
};
