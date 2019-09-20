/**
 * dp[i][j]表示从左上角到A[i][j]的最短路径和
 * dp[i][j]=min(dp[i-1][j],dp[i][j-1])+grid[i][j]
 */

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        
        
        int dp[10001][10001];
        int m=grid.size();  // m行
        int n=grid[0].size(); // n列
        
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(i==0&&j==0)
                    dp[0][0]=grid[0][0];
                else if(i==0)
                    dp[i][j]=dp[i][j-1]+grid[i][j];
                else if(j==0)
                    dp[i][j]=dp[i-1][j]+grid[i][j];
                else
                    dp[i][j]=min(dp[i-1][j],dp[i][j-1])+grid[i][j];
            }
        }
        
        return dp[m-1][n-1];
    }
};
