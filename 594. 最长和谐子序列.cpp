class Solution {
public:
    int findLHS(vector<int>& nums) {
        
        map<int,int> Hash;
        
        for(int i=0;i<nums.size();i++){
            Hash[nums[i]]++;
        }
        
        int maxLen=0;
        
        for(int i=0;i<nums.size();i++){
            if(Hash[nums[i]]!=0&&Hash[nums[i]-1]!=0)
                maxLen=max(maxLen,Hash[nums[i]]+Hash[nums[i]-1]);
        }
        return maxLen;
    }
};
