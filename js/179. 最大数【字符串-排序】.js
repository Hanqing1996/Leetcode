/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums=nums.sort((a,b)=>cmp(a,b)).reverse()
    // 最大数是0，说明原数组是形如[0,0...]
    if(nums[0]===0) return "0"
    return nums.join("")
};

var cmp=function(a,b){
    let res1=String(a)+String(b)
    let res2=String(b)+String(a)
    return res1-res2 
}
