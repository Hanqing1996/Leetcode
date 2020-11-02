/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {

    let hash={}
    let maxAlpha=S[0],maxAmount=1
    for(let i=0;i<S.length;i++){
        let current=S[i]
        hash[current]=hash[current]===undefined?1:hash[current]+1
        if(hash[current]>maxAmount){
            maxAlpha=current
            maxAmount=hash[current]
        }
    }
    // 首先排除掉构不成相邻不重复字符串的情况，即出现最多的字符数量比其它字符总数多两个及以上
    let remain=S.length-maxAmount
    if(maxAmount-remain>=2)
        return ""
    let ans=[]
    /**
     * 对于能构成不相邻字符串的情况，应该尽量优先安排数量当前多的字符（与 621. 任务调度器类似的思路）
     * 比如 abcdaaaa
     * 如果数量最多的a被最迟安排:bcdaaaaa,就无法构成不相邻字符串了 
     */

    let types=Object.keys(hash)
    types=types.sort((a,b)=>hash[b]-hash[a]).slice(0,2)
    while(types.length>0){
        for(let i=0;i<types.length;i++){
            ans.push(types[i])
            hash[types[i]]--
            if(hash[types[i]]===0)
                delete hash[types[i]]
        }
        // 更新待排列字符
        types=Object.keys(hash)
        types=types.length>1?types.sort((a,b)=>hash[b]-hash[a]).slice(0,2):types
    }
    return ans.join("")
};
