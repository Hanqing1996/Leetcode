/**
 * dp[i]表示以nums[i]为结尾的偷盗序列所能产生的最大收益
 */
class Solution {
public:
    int rob(vector<int>& nums) {
        
        int dp[101];
        int len=nums.size();
        int maxProfit=INT_MIN;
        
        if(len==0)
            return 0;
        
        for(int i=0;i<len;i++){
            if(i==0||i==1)
                dp[i]=nums[i];
            else{
                for(int j=0;j<i-1;j++){
                    dp[i]=max(dp[i],dp[j]+nums[i]);
                }
            }
            maxProfit=max(maxProfit,dp[i]);    
        }
        return maxProfit;
    }
};
