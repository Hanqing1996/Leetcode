/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 二分查找，搜索目标为第一个 nums[i]!=i 的 nums[i]
 */
var missingNumber = function(nums) {
    let low=0,high=nums.length-1,mid=-1
    // low=high 时搜索结束，所以这里不能设置 low<=high
    while(low<high){
        mid=Math.floor((low+high)/2)
        if(nums[mid]===mid)
            low=mid+1
        else
            high=mid
    }
    // 最终的结果一定是 low=high
    // 缺失的数是n,比如[0,1,2,3]
    if(low===nums.length-1&&nums[low]===low)
        return nums.length
    else
        return low
};
