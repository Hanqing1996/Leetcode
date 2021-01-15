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

/**
 * 战乱年间，各国各派出若干名武士，相约厮杀于将军台上。
 * 约定每次向台中放入一名武士，对于前后两名武士，若隶属一国，则并肩而立，等待下名武士的到来。否则后者可与前者同归于尽（一拼一）。
 * 毫无疑问，最后的胜利者，一定是派出武士最多的国家。
 */
var majorityElement = function(nums) {
    let len=nums.length

    let victor,currentNum=0

    for(let i=0;i<len;i++){
        if(currentNum===0){
            victor=nums[i]
        }
        if(nums[i]===victor)
            currentNum++
        else
            currentNum--
    }
    return victor
};
