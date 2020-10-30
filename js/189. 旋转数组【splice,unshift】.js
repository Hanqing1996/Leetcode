/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 最简单的方法就是暴力，时间复杂度O(n*k)，更近一步可以使用 js 的 splice 和 unshift
var rotate = function(nums, k) {
    let {length:len}=nums
    // 避免 k 大于 nums 长度
    k=k%len

    const toDelete=nums.splice(len-k)
    nums.unshift(...toDelete)
    return nums
};
