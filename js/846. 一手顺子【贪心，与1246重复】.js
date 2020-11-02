
// 与 1296 相同

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    return isPossibleDivide(hand,W)
};

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
