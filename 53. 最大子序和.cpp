/**
 * dp[i]表示以nums[i]结尾的连续子数组最大和；
 */
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        int dp[100001];
        int maxSum=-1000000;
        for(int i=0;i<nums.size();i++){
            dp[i]=nums[i];
            if(i>0){
                dp[i]=max(dp[i],dp[i-1]+nums[i]);
            }
            maxSum=max(maxSum,dp[i]);
        }
        return maxSum;
    }
};
