class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        
        map<int,int> Hash;
        
        for(int i=0;i<nums.size();i++){
            if(Hash[nums[i]]==1)
                return true;
            else
                Hash[nums[i]]++;
        }
        return false;
    }
};
