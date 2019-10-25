class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> res;
        int n=nums.size();
        set<int> se;
        for(int i=0;i<n;i++){
            se.insert(nums[i]);
        }
        for(int i=1;i<=n;i++){
            if(se.find(i)== se.end())
                res.push_back(i);
        }
        return res;
    }
};
