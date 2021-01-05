/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 参考https://leetcode-cn.com/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
// 到达 numRows,方向由下转上。
// 到达 0,方向由上转下
var convert = function(s, numRows) {
    if(numRows<2)
        return s
    let res=Array.from({length:numRows},()=>"")
    let i=0,update=-1
    let pre
    for(let c of s){
        if(i===numRows-1||i===0)
            update=-update
        res[i]+=c
        i+=update
    }
    return res.join('')
};
