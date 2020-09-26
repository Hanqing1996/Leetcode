/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {

    // 参考题解 https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/dong-tai-gui-hua-shu-xue-by-sophia_fez/

    // dp[i] 表示将正整数i拆分成j和i-j两个正整数，则有两种情况
    // i-j 不可再分，此时 dp[i]=j*(i-j)
    // i-j 可再分，此时 dp[i]=j*dp[i-j]
    // 综上，dp[i]=Math.max(dp[i],Math.max(j*(i-j),j*dp[i-j]))

    let dp=Array(n+1).fill(1)
    dp[0]=0
    dp[1]=1
    for(let i=2;i<n+1;i++){
        for(let j=1;j<i;j++){
            dp[i]=Math.max(dp[i],Math.max(j*(i-j),j*dp[i-j]))
        }
    }
    return dp[n]
};
