/**
 * @param {number[]} nums
 * @return {number}
 */

// 题意：找满足度数的最短连续子数组
var findShortestSubArray = function(nums) {
    let space={}
    let frequency={}
    let degree=1
    let minLen=50001
    for(let i=0;i<nums.length;i++){
        frequency[nums[i]]=frequency[nums[i]]!==undefined?frequency[nums[i]]+1:1
        space[nums[i]]=space[nums[i]]!==undefined?space[nums[i]]:i

        // 突破已有数组度
        if(frequency[nums[i]]>degree){
            degree=frequency[nums[i]]
            minLen=i-space[nums[i]]+1
            continue
        }
        // 追平已有数组度
        if(frequency[nums[i]]===degree){
            minLen=Math.min(i-space[nums[i]]+1,minLen)
        }
    }
    return minLen

};
