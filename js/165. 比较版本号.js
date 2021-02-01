var compareVersion = function(version1, version2) {
    let v1=version1.split('.').map(item=>parseInt(item))
    let v2=version2.split('.').map(item=>parseInt(item))

    let len=Math.max(v1.length,v2.length)
    for(let i=0;i<len;i++){
        v1[i]===undefined&&(v1[i]=0)
        v2[i]===undefined&&(v2[i]=0)
        if(v1[i]<v2[i])
            return -1
        if(v1[i]>v2[i])
            return 1    
    }
    return 0
};
