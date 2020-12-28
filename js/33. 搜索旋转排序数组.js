/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 参考 https://leetcode-cn.com/problems/search-in-rotated-sorted-array/comments/114623
 * 
 * nums[mid]<nums[right]=>[mid,right] 即右区间有序
 * nums[mid]>nums[right]=>[left,mid] 即左区间有序
 */
var search = function(nums, target) {
    let len=nums.length
    let left=0,right=len-1
    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]===target)
            return mid
        // 右区间有序
        else if(nums[mid]<nums[right]){
            // 如果 target 在值上的大小介于 nums[mid] 和 nums[right] 之间，则它的位置一定介于二者之间。
            if(nums[mid]<target&&target<=nums[right])
                left=mid+1
            else
                right=mid-1
        }
        // 左区间有序
        else{
            // 如果 target 在值上的大小介于 nums[left] 和 nums[mid] 之间，则它的位置一定介于二者之间。
            if(nums[left]<=target&&target<nums[mid])
                right=mid-1
            else
                left=mid+1
        }
    }
    return -1
};
