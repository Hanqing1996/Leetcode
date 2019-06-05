/*
 dp[i]表示以price[i]价格出售的可获最大利润
 */
class Solution {
    public int maxProfit(int[] prices) {
        int[] dp=new int[100001];
        int result=0;
        for(int i=0;i<prices.length;i++)
        {
            dp[i]=0;//初始值为0
            for(int j=0;j<i;j++)
            {
                dp[i]=Math.max(dp[i],prices[i]-prices[j]);
                result=Math.max(result,dp[i]);
            }
        }
        return result;
    }
} 
