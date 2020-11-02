
/**
 * 假如 nums = [1,2,2,3,3,3,4,4,5,9,10,11], k = 3
 * 若 nums 可分为长度为3的连续数组单元，就意味着数组最小值 1 所在子集合中，必然有 k-1 个大于1的数。
 * 
 * 所以，对于当前数组，我们去找是否有大于最小值的 k-1 个数，若存在则继续，若不存在则说明一定有多余的，不可构成长度为k的连续数组单元的数存在，返回 false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    let hash={}
    for(let i=0;i<nums.length;i++){
        hash[nums[i]]=hash[nums[i]]===undefined?1:hash[nums[i]]+1
    }
    
    let types=Object.keys(hash).sort((a,b)=>parseInt(a)-parseInt(b))

    while(types.length>0){
        let pre=parseInt(types[0])
        hash[types[0]]--
        hash[types[0]]===0&&(delete hash[types[0]])

        if(types.length<k)
            return false

        for(let i=1;i<k;i++){
            current=parseInt(types[i])
            if(current-pre!==1)
                return false
            else{
                pre=current 
                hash[types[i]]--
                hash[types[i]]===0&&(delete hash[types[i]])
            }
        }
        types=Object.keys(hash).sort((a,b)=>parseInt(a)-parseInt(b))
    }
    return true
};
