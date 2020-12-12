/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */


/**
 * 设 a,common 为数组, b 为数字
 * 如果 a+common<s;a+common+b>=s; 当 b 足够大时, a 去掉前面若干项+common+b>=s 依然成立
 * 滑动窗口的目的就是遍历查找这样的 b
 */

// 
var minSubArrayLen = function(s, nums) {
    // 如果不存在符合条件的子数组，返回 0
    let temp=nums.reduce((a,b)=>a+b,0)
    if(temp<s)
        return 0

    let minLen=nums.length
    let left=0,right=0
    let sum=0
    for(let right=0;right<nums.length;right++){
        sum+=nums[right]
        // 连续去掉 a 的若干项，可能 sum 依然大于等于 s,所以用 while
        while(sum>=s){
            minLen=Math.min(minLen,right-left+1)
            sum-=nums[left++]
        }
    }
    return minLen
    
};
