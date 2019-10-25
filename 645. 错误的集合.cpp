class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n=nums.size();
        sort(nums.begin(), nums.end());
        vector<int> res;
        int Hash[10001];
        int sum=0;
        for(int i=0;i<nums.size();i++){
            if(Hash[nums[i]]==1){
                res.push_back(nums[i]);
            }
            Hash[nums[i]]++;
            sum+=nums[i];
        }
        res.push_back(res[0]-(sum-(1+n)*n/2));
        return res;
    }
};
