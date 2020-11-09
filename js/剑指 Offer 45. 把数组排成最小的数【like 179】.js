/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    
    const cmp=function(a,b){
        let ab=String(a)+String(b)
        let ba=String(b)+String(a)
        return ab-ba
    }
    nums=nums.sort((a,b)=>cmp(a,b))
    if(nums[0]==='0')
        return "0"    
    return nums.join('')
};
