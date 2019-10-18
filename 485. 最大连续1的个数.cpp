class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        
        int len=nums.size();
        if(nums[len-1]==1)
            nums.push_back(0);
        
        vector<int> res;
        
        int maxLen=0;
        int count=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==0){
                res.push_back(i);
                if(count>0)
                    maxLen=max(maxLen,res[count]-res[count-1]-1);
                count++;
            }
        }
        
        maxLen=max(maxLen,res[0]);
        return maxLen;
    }
};
