var searchRange = function(nums, target) {
    let left=0,right=nums.length-1
    let res=[]

    // 先找左边界
    while(left<right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]>target) 
            right=mid-1
        else if(nums[mid]<target)
            left=mid+1
        else
            right=mid
    }
    res[0]=nums[left]===target?left:-1

    if(res[0]===-1)
        return [-1,-1]

    // 再找右边界
    let current=left
    while(nums[current]===target&&current<nums.length)
        current++
    res[1]=current-1
    return res
};
