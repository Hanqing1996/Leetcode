var isAnagram = function(s, t) {
    if(s.length!==t.length)
        return false
    let hash={}
    for(let i=0;i<s.length;i++){
        hash[s[i]]=(hash[s[i]]|0)+1
    }
    for(let i=0;i<t.length;i++){
        if(hash[t[i]]===undefined)
            return false
        hash[t[i]]--
        // 检测 t 是否有多余 or 不同字符
        hash[t[i]]===0&&(hash[t[i]]=undefined)
    }
    return true
};
