/**
 * @param {string} s
 * @return {number}
 */

/**
 * dp思路：dp[i][j]表示s[i]-s[j]是不是回文子串
 */
// 由于采用 5. 最长回文子串 的遍历方式可查找到所有子串，判断它们是不是子串即可
var countSubstrings = function(s) {
    let len=s.length

    let dp=Array.from({length:len},()=>Array.from({length:len},()=>false))

    // 统计长度大于1的回文子串个数
    let count=0
    for(let i=1;i<len;i++){
        dp[i][i]=true
        for(let j=0;j<i;j++){
            if(s[j]===s[i]&&(dp[j+1][i-1]||j===i-1)){
                dp[j][i]=true
                count++
            }
        }
    }
    // 长度大于1的回文子串个数+长度等于1的回文子串个数
    return count+len
};
