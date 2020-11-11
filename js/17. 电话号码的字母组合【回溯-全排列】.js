/**
 * @param {string} digits
 * @return {string[]}
 */


// 这题类似于全排列,["af","bd"]说明同一位置上之前的符号还可以再次被选择，类似于 [123,132]
// 这里的递归，本质上和 digits.length 次 for 循环没有区别
var letterCombinations = function(digits) {

    if(digits==="")
        return []


    let mapping=new Map()
    mapping[2]="abc"
    mapping[3]="def"
    mapping[4]="ghi"
    mapping[5]="jkl"
    mapping[6]="mno"
    mapping[7]="pqrs"
    mapping[8]="tuv"
    mapping[9]="wxyz"

    let n=digits.length
    let res=[]
    let ans=[]
    const dfs=function(depth){
        if(depth===n){
            res.push(ans.join(''))
            return
        }
        for(let i=0;i<mapping[digits[depth]].length;i++){
            ans[depth]=mapping[digits[depth]][i]
            dfs(depth+1)
        }
    }
    dfs(0)
    return res
};
