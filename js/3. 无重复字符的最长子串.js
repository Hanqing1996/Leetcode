/**
 * @param {string} s
 * @return {number}
 */


// abcaqwerty,对于 abc 而言，它舍弃掉第一项'a',才能接受后面的'aqwerty' ,获得更大的长度
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
            maxLen=Math.max(queue.length,maxLen)
        else
            queue=queue.slice(repeatIndex+1)
    }
    return maxLen
};
