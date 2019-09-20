/**
 * dp[i][j]表示由start到A[i][j]的路径数
 */
class Solution {
public:
    int uniquePaths(int m, int n) {
        
        int dp[1001][1001];
        
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(i==0)
                    dp[i][j]=1;
                else if(j==0)
                    dp[i][j]=1;
                else
                    dp[i][j]=dp[i-1][j]+dp[i][j-1];
            }
        }
        return dp[n-1][m-1];
    }
};
