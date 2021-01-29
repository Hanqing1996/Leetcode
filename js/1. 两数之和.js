/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 缓存思想，时间复杂度O(n)，空间复杂度O(n)
var twoSum = function(nums, target) {
    let cache={}
    for(let i=0;i<nums.length;i++){
        if(cache[target-nums[i]]!=undefined)
            return [cache[target-nums[i]],i]
        cache[nums[i]]=i
    }
};
