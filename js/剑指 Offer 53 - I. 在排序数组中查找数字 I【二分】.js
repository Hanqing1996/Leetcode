/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low=0,high=nums.length-1,mid
    // 一旦查找到等于 target 的数，就停止搜索
    while(low<=high){
        mid=Math.floor((low+high)/2)
        if(nums[mid]===target)
            break
        if(nums[mid]>target)
            high=mid-1
        else
            low=mid+1            
    }  
    if(low>high)
        return 0
    // 前后遍历统计    
    let leftSide=mid
    while(nums[leftSide]===nums[mid]){
        leftSide--
    }    
    let rightSide=mid
    while(nums[rightSide]===nums[mid]){
        rightSide++
    }
    return rightSide-leftSide-1
};
