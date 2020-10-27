/**
 * @param {number[]} nums
 * @return {number}
 */
 
 
 // 参考 https://leetcode-cn.com/problems/first-missing-positive/solution/tong-pai-xu-python-dai-ma-by-liweiwei1419/
var firstMissingPositive = function(nums) {
    // 原地哈希
    let i=0
    while(i<nums.length){
        if(nums[i]!=i+1){
            while(nums[i]>0&&nums[i]<=nums.length&&nums[nums[i]-1]!=nums[i]){
                swap(nums,i,nums[i]-1)
            }
        }
        i++;
    }

    for(let i=0;i<nums.length;i++){
        // 处理[6,7,8,9],所以不是判断负值
        if(nums[nums[i]-1]!=i+1){
            return i+1
        }
    }
    // 处理 [1,2,3]
    return nums.length+1
};
let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
