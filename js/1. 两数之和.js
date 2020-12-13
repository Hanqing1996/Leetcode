/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 题目保证每种输入只会对应一个答案,说明重复元素肯定不会作为返回数组成员
var twoSum = function(nums, target) {
    let cache={}
    for(let i=0;i<nums.length;i++){
        if(cache[target-nums[i]]!=undefined)
            return [cache[target-nums[i]],i]
        cache[nums[i]]=i
    }
};
