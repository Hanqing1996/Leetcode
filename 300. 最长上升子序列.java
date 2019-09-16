/**
 * 注意这道题没有要求连续
 * dp[i]表示以nums[i]结尾的最长上升子序列长度；
 * 这道题求的一个数组的最长上升子序列长度，我们将问题分解，先求出以nums[0],num[1]...nums[n-1]结尾的最长升子序列长度，
 * 再求这n种情形中的最大值
 */

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        
        int dp[10001];
        int maxLength=0;
        
        if(nums.size()==1)
            return 1;
        
        for(int i=0;i<nums.size();i++){
            dp[i]=1;
            for(int j=0;j<i;j++){
                if(nums[j]<nums[i]){
                    dp[i]=max(dp[i],dp[j]+1);
                }
                maxLength=max(maxLength,dp[i]);
            }
        }
        return maxLength;
    }
};
