/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */


/**
 * 设 a,common 为数组, b 为数字
 * 如果 a+common<s;a+common+b>=s; 当 b 足够大时, a 去掉前面若干项+common+b>=s 依然成立
 * 滑动窗口的目的就是遍历查找这样的 b
 */

// 
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let queue=[]
    let sum=0
    let minLen
    for(let i=0;i<nums.length;i++){
        queue.push(nums[i])
        sum+=nums[i]
        while(sum>=s){
            minLen=minLen?Math.min(minLen,queue.length):queue.length
            sum-=queue.shift()
        }
    }
    return minLen?minLen:0
};


// 写法2
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let temp=nums.reduce((a,b)=>a+b,0)
    if(temp<s)
        return 0
    let minLen=nums.length
    let queue=[],sum=0
    for(let i=0;i<nums.length;i++){
        // 新元素一定会被添加到队列中去
        queue.push(nums[i])
        sum+=nums[i]

        while(sum>=s){
            minLen=Math.min(queue.length,minLen)
            sum-=queue.shift()
        }
    }
    return minLen
};
