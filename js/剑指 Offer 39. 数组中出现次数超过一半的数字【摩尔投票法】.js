/**
 * @param {number[]} nums
 * @return {number}
 */

// 弱智 hash 法
var majorityElement = function(nums) {
    let hash={}
    for(let i=0;i<nums.length;i++){
        hash[nums[i]]=hash[nums[i]]===undefined?1:hash[nums[i]]+1
        if(hash[nums[i]]>Math.floor(nums.length/2))
            return nums[i]
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res=0,move=0
    for(let i=0;i<nums.length;i++){
        if(move===0)
            res=nums[i]
        move+=res===nums[i]?1:-1
    }
    return res
};
