/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // dp[i][j] 表示从 triangle[0][0] 到 triangle[i][j] 所需的最小路径和
    // dp[i][j]=min(dp[i-1][j],dp[i-1][j-1])+triangle[i][j]

    let {length}=triangle
    let dp=Array.from({length},()=>Array.from({length},()=>0))
    dp[0][0]=triangle[0][0]
    for(let i=1;i<length;i++){
        // 注意 triangle 每行长度是不同的
        let {length:lineSize}=triangle[i]
        for(let j=0;j<lineSize;j++){
            if(j==0){
                // 贴边下来，只有一条路径
                dp[i][j]=dp[i-1][j]+triangle[i][j]    
            }else if(j==lineSize-1){
                dp[i][j]=dp[i-1][j-1]+triangle[i][j]    
            }else{
                dp[i][j]=Math.min(dp[i-1][j],dp[i-1][j-1])+triangle[i][j]
            }
        }
    }

    let MIN=dp[length-1][0]
    for(let i=1;i<length;i++){
        MIN=Math.min(MIN,dp[length-1][i])
    }
    return MIN
};
