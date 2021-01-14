/**
 * @param {string} s
 * @return {string}
 */

/**
 * dp思路：dp[i][j]表示s[i]-s[j]构成的回文子串最大长度
 */
var longestPalindrome = function(s) {
    let len=s.length
    let dp=Array.from({length:len},()=>Array.from({length:len},()=>0))
    dp[0][0]=1
    let res=s[0]

    for(let i=1;i<len;i++){
        dp[i][i]=1
        for(let j=0;j<i;j++){
            if(s[i]===s[j]&&(dp[j+1][i-1]||j===i-1)){
                dp[j][i]=j===i-1?2:dp[j+1][i-1]+2
                if(dp[j][i]>res.length){
                    res=s.substring(j,i+1)
                }
            }
        }
    }
    return res
};


// dp[j][i] 表示子串 substring(j,i+1)是否为回文子串 
var longestPalindrome = function(s) {
    let len=s.length
    if(len===1)
        return s[0]

    let dp=Array.from({length:len},()=>Array.from({length:len},()=>false))
    let res=s[0],maxLen=1
    for(let i=1;i<len;i++){
        dp[i][i]=true
        for(let j=0;j<i;j++){
            if(s[i]===s[j]&&(i===j+1||dp[j+1][i-1])){
                dp[j][i]=true
                if(i-j+1>maxLen){
                    res=s.substring(j,i+1)
                    maxLen=i-j+1
                }
            }
        }
    }
    return res
};
