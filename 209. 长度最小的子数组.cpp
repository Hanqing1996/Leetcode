class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int left=0,right=0;
        int currentSum=0;
        int len=nums.size();
        int minLen=10000;

        // 反复测边界，心累
        while(right<len){
            currentSum+=nums[right];
            right++;
            while(currentSum>=s){
                minLen=min(minLen,right-left);
                currentSum-=nums[left];
                left++;
            }
        }
        if(minLen==10000) return 0;
        return minLen;
    }
};
