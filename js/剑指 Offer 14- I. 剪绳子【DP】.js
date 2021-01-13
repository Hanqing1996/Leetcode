/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    let dp=[]
    dp[1]=1
    for(let i=2;i<=n;i++){
        dp[i]=-1
        for(let j=1;j<i;j++){
            dp[i]= Math.max(dp[i],Math.max(j*(i-j),dp[j]*(i-j))) 
        }
    }
    return dp[n]
};
