/**
 * @param {string} s
 * @return {number}
 */

/**
 * dp思路：dp[i][j]表示s[i]-s[j]是不是回文子串
 */
var countSubstrings = function(s) {
    let len=s.length
    let dp=Array.from({length:len},()=>Array.from({length:len},()=>false))
    
    let res=0
    
    for(let i=0;i<len;i++){
        dp[i][i]=true
        res++
        for(let j=0;j<i;j++){
            if(s[i]===s[j]&&(dp[j+1][i-1]||j===i-1)){
                dp[j][i]=true
                res++
            }
        }
    }
    return res
};
