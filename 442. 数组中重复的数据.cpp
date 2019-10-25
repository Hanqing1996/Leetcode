class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        
        int n=nums.size();
        vector<int> res;
        int Hash[100001];
        
        for(int i=0;i<n;i++){
            Hash[nums[i]]++;
            if(Hash[nums[i]]==2)
                res.push_back(nums[i]);
        }
        return res;
    }
};
