/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let res={}

    // 暴力
    strs.map(str=>{
        let pro=str.split('').sort().join('')
        res[pro]=res[pro]?[...res[pro],str]:[str]
    })

    let output=[]
    for(let key in res){
        output.push(res[key])
    }
    return output
};
