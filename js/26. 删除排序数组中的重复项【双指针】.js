/**
 * @param {number[]} nums
 * @return {number}
 */


// p 指向不重复的数，q用于遍历 nums 
var removeDuplicates = function(nums) {
    const {length:len}=nums
    if(len===1) return 1 
    let p=0,q=1
    while(q<len){
        if(nums[q]!==nums[p]){
            nums[p+1]=nums[q]
            p++
        }    
        q++  
    }
    // 因为能保证 p 每次指向的数字都不重复，因此当 q 遍历完整个 nums 数组时,p 已经指向最后一个不重复的数字
    return p+1
};
