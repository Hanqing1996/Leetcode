/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let hash={}
    if(s.length===1)
        return s
    for(let i=0;i<s.length;i++){
        // s[i] 是第一次出现，且之后不会再次出现
        if(s.indexOf(s[i],i+1)===-1&&s.indexOf(s[i],0)===i)
            return s[i]
    }
    return " "
};
