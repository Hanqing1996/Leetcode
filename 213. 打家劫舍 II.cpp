 
/**
 * dp[i]表示以nums[i]为结尾的偷盗序列所能产生的最大收益
 * 在198的基础上注意不要让头尾相连即可
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
                // 最后一间房
                int start;
                if(i==len-1)
                    start=1;
                else
                    start=0;
                for(int j=start;j<i-1;j++){
                    dp[i]=max(dp[i],dp[j]+nums[i]);
                }
            }
            maxProfit=max(maxProfit,dp[i]);    
        }
        return maxProfit;
    }
};
