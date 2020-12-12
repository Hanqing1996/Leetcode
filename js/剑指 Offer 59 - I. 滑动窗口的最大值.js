/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 呃，直接模拟吧
var maxSlidingWindow = function(nums, k) {
    if(nums.length===0)
        return []

    let maxValues=[]

    for(let right=k-1;right<nums.length;right++){
        left=right-k+1

        // 稍微做下剪枝,如果新的数大于上一个窗口最大值，直接记录新的最大值
        let lastMaxValue=maxValues[maxValues.length-1]
        if(nums[right]>lastMaxValue){
            maxValues.push(nums[right])
            continue
        }
        // 否则无法确定之前的最大值是否已经离开窗口，因此需要遍历窗口

        maxValue=nums[left]
        for(let i=left+1;i<=right;i++){
            maxValue=Math.max(maxValue,nums[i])
        }
        maxValues.push(maxValue)
    }
    return maxValues
};
