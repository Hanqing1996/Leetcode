/**
 * 题目允许当天买入,当天售出。
 * 所以[1,2,3,4,5]可以看作第1天买入,第2天售出;第2天买入,第3天售出;第3天买入,第4天售出;第4天买入,第5天售出
 * 规律:只要今天价格比昨天高,就出售
 */

class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length==0)
            return 0;
        
        int maxPro=0;
        int pre=prices[0];
            
        for(int i=1;i<prices.length;i++){
            if(prices[i]>pre){
                int profit=prices[i]-pre;
                maxPro+=profit;
                pre=prices[i];
            }
            pre=prices[i];
        }
        return maxPro;
    }
}
