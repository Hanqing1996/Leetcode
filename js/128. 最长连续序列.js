/**
 * @param {number[]} nums
 * @return {number}
 */

// 空间换时间,缺点是 nums中最大值和最小值差距极大时，需要开辟一个很大的空间存放 range 数组
var longestConsecutive = function(nums) {
    let len=nums.length
    if(len===0)
        return 0

    // 找最大值和最小值
    let minValue=nums[0],maxValue=nums[0]
    for(let i=1;i<len;i++){
        minValue=Math.min(minValue,nums[i])
        maxValue=Math.max(maxValue,nums[i])
    }

    // 生成对应范围数组
    let range=[]
    for(let i=0;i<len;i++){
        range[nums[i]]=true
    }

    // 统计range数组的最大连续区间即可
    let res=0,count=0
    for(let i=minValue;i<=maxValue;i++){
        if(range[i]){
            count++
            res=Math.max(res,count)
        }else{
            count=0
        }
    }
    return res
};
