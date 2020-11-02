/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 我真的搞不懂这题的意义在哪里。。。
var compareVersion = function(version1, version2) {
    let v1= version1.split('.').map(item=>parseInt(item))
    let v2= version2.split('.').map(item=>parseInt(item))

    // 补全默认版本号
    for(let i=0;i<4;i++){
        v1[i]=v1[i]===undefined?0:v1[i]
        v2[i]=v2[i]===undefined?0:v2[i]

        if(v1[i]<v2[i])
            return -1
        if(v1[i]>v2[i])
            return 1    
    }
    return 0
};
