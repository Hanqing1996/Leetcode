/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length===0)
        return null

    const traverse=function(currentNums){
        
        // 尽量均分数组
        const middle=Math.floor(currentNums.length/2)
        const rootValue=currentNums[middle]

        const leftPart=currentNums.slice(0,middle)
        const rightPart=currentNums.slice(middle+1)

        const root=new TreeNode(rootValue)
        root.left=leftPart.length===0?null:traverse(leftPart)
        root.right=rightPart.length===0?null:traverse(rightPart)
        return root
    }
    return traverse(nums)

};
