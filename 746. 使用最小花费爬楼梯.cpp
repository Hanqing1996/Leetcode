/**
 * dp[i]表示到达第i个阶梯所需的最小花费
 * dp[i]=min(dp[i-1],dp[i-2])+cost[i]
 */
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        
        cost.push_back(0);
        
        int dp[10001];
        dp[0]=cost[0];
        dp[1]=cost[1];
        
        int len=cost.size();
        for(int i=2;i<len;i++){
            dp[i]=min(dp[i-1],dp[i-2])+cost[i];
        }
        return dp[len-1];
    }
};
