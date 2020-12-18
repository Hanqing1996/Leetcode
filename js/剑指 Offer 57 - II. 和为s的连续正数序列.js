/**
 * @param {number} target
 * @return {number[][]}
 */


/**
 * 由于 [1,2,3...target-1] 是递增的，对于已有的满足要求的 queue,只有舍弃前若干项，再吸纳
 */
var findContinuousSequence = function(target) {
    let queue=[],sum=0
    let res=[]
    for(let i=1;i<target;i++){
        queue.push(i)
        sum+=i
        while(sum>=target){
            if(sum===target)
                res.push(queue.slice())
            sum-=queue.shift()
        }
    }
    return res
};
