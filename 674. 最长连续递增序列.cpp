class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        int maxLen=1;
        int left=0;
        int len=nums.size();
        if(len==0) return 0;
        while(left<len){
            int count=1;
            int pre=nums[left];
            for(int i=left+1;i<len;i++){
                if(nums[i]>pre){
                    count++;
                    pre=nums[i];
                }
                else break;
            }
            maxLen=max(maxLen,count);
            left+=count;
        }
        return maxLen;
    }
};
