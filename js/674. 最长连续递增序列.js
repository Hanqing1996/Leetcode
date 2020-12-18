/**
 * @param {number[]} nums
 * @return {number}
 */

// 对于 1,2,3,2,4,5,6,7。 将 1,2,3 舍弃才能获得更长的 2,4,5,6,7 
var findLengthOfLCIS = function(nums) {
    let len=nums.length
    if(len===0)
        return 0
    let maxLen=1    
    let queue=[nums[0]]
    for(let i=1;i<len;i++){
        // 递增
        let increase=(nums[i]>nums[i-1])
        queue.push(nums[i])
        if(increase)
            maxLen=Math.max(maxLen,queue.length)
        else
            queue=[queue.pop()]    
    }
    return maxLen
};
