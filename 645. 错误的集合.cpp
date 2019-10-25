class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n=nums.size();
        set<int> se;
        vector<int> res;
        int Hash[10001];
        int numsSum=0,seSum=0;
        for(int i=0;i<n;i++){
            se.insert(nums[i]);
            numsSum+=nums[i];
        }
        
        // 找重复出现的数字
        for(auto it = se.begin(); it != se.end(); it++){
            seSum+=*it;
        }
        res.push_back(numsSum-seSum);
        
        // 找缺失的数字
        for(int i=1;i<=n;i++){
            if(se.find(i)== se.end())
                res.push_back(i);
        }

        return res;
    }
};
