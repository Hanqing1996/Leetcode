/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/**
 * 假如现有queue=[ADDDDDDDDDDDDDDDDDDBC],t="ABC"。下一个元素是'A',显然添加新元素后,queue的有效长度将锐减!
 */
var minWindow = function(s, t) {
    let dict={}
    for(let i=0;i<t.length;i++){
        dict[t[i]]=(dict[t[i]]|0)+1
    }
    let needCount=t.length
    
    let minLen=-1
    let minStr=''

    let len=s.length
    let queue=''
    for(let i=0;i<len;i++){
        // 新元素一定会被添加到队列中
        queue+=s[i]


        // 一个元素还差1个，一个元素已经多1个,这种情况下 needCount 不能为0

        if(dict[s[i]]>0)
            needCount-=1

        dict[s[i]]!==undefined&&dict[s[i]]--

        while(needCount===0){
            if(minLen<0){
                minLen=queue.length
                minStr=queue
            }     

            if(queue.length<minLen){
                minLen=Math.min(minLen,queue.length)
                minStr=queue
            }

            let temp=queue[0]
            queue=queue.slice(1)
            if(dict[temp]!==undefined){
                dict[temp]++

                if(dict[temp]>0)
                    needCount++
            }
        }
    }
    return minStr
};
