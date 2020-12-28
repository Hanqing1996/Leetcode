/**
 * @param {number[]} nums
 * @return {number}
 */

// 旋转数组，末尾元素一定小于等于第一个元素
var findMin = function(nums) {
    
    let left=0,right=nums.length-1
    while(left<right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]>nums[right])
            left=mid+1
        else 
            right=mid
    }
    return nums[left] 
};
