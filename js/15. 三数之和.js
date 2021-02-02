/**
 * 
首先对数组进行排序，排序后固定一个数 nums[i]nums[i]，再使用左右指针指向 nums[i]nums[i]后面的两端，数字分别为 nums[L]nums[L] 和 nums[R]nums[R]，计算三个数的和 sumsum 判断是否满足为 00，满足则添加进结果集
如果 nums[i]nums[i]大于 00，则三数之和必然无法等于 00，结束循环
如果 nums[i]nums[i] == nums[i-1]nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
当 sumsum == 00 时，nums[L]nums[L] == nums[L+1]nums[L+1] 则会导致结果重复，应该跳过，L++L++
当 sumsum == 00 时，nums[R]nums[R] == nums[R-1]nums[R−1] 则会导致结果重复，应该跳过，R--R−−
时间复杂度：O(n^2)
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // 排序
    let len=nums.length
    let res=[]
    for(let i=0;i<len-2;i++){
        // 如果当前数字大于0，则之后的三数之和一定大于0，所以结束循环
        if(nums[i]>0)
            break
        // 去重
        if(i > 0 && nums[i] == nums[i-1]) 
            continue; 
        let left=i+1
        let right=len-1
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right]
            if(sum<0)
                left++
            else if(sum>0)
                right--
            else{
                res.push([nums[i],nums[left],nums[right]])
                while(left<right&&nums[left]===nums[left+1]) left++ // 去重
                while(left<right&&nums[right]===nums[right-1]) right--// 去重
                left++
                right--
            }
        }
    }
    return res
};
