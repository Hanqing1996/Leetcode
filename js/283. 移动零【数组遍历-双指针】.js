/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // 用 p 构造非0元素数组，用p遍历原数组nums
    let p=0
    for(let q=0;q<nums.length;q++){
        if(nums[q]!=0){
            // 交换值
            let temp=nums[p]
            nums[p]=nums[q]
            nums[q]=temp
            p++
        }
    }
    return nums
};
