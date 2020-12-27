/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function(nums) {
    let p=0
    for(let q=1;q<nums.length;q++){
        if(nums[q]!=nums[p])
            nums[++p]=nums[q]
    }
    return p+1
};
