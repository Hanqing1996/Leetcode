/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {


   let dp=Array.from({length:n},()=>Array.from({length:n},()=>0)) 

   // dp[i][j] 表示从 (0,0) 到 (i,j) 的路径总数
   for(let i=0;i<n;i++){
       dp[i][0]=1
       for(let j=0;j<m;j++){
           dp[0][j]=1
           if(i>0&&j>0){
               dp[i][j]=dp[i-1][j]+dp[i][j-1]
           }
       }
   }
   return dp[n-1][m-1] 

};
