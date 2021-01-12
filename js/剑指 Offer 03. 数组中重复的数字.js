/**
 * @param {number[]} nums
 * @return {number}
 */


// 参考 https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/comments/741813
var findRepeatNumber = function(nums) {
    let len=nums.length

    // 筛查 [2,3,1,0,2] 
    for(let i=0;i<len;i++){
        if(nums[i]!=i){
            if(nums[nums[i]]===nums[i])
                return nums[i]
            swap(nums,nums[i],i)
        }
    }

    // 筛查 [1,2,3,2]
    for(let i=0;i<len;i++){
        if(nums[i]!=i)
            return nums[i]
    }
};

let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
