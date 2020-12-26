/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 目标存在->返回下标;否则返回 -1
var search = function(nums, target) {
    let left=0,right=nums.length
    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]<target)
            left=mid+1
        else
            right=mid-1
    }
    // 找不到->left 是数组中第一个大于 trget 的元素下标
    // 找到了->left 就是等于 target 元素的下标
    return nums[left]===target?left:-1
};
