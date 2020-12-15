/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queue=[]
    let len=s.length
    if(len===0)
        return 0
    let maxLen=1
    for(let i=0;i<len;i++){

        // 检测新元素是否已存在于 queue 中
        let repeatIndex=queue.indexOf(s[i])
        // 新元素是一定会被添加到 queue 中的
        queue.push(s[i])
        if(repeatIndex<0)
            // 我们要做的只是记录 queue 变化过程中曾达到的最大长度
            maxLen=Math.max(queue.length,maxLen)
        else
            queue=queue.slice(repeatIndex+1)
    }
    return maxLen
};
