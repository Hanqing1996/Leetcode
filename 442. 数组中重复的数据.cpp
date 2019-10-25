// 时间复杂度：O(n) 空间复杂度：o(1)
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        
        vector<int> res;
        int repeat,lost,wrongSum=0,trueSum=0,n=nums.size();

        for(int i=0;i<n;i++){
            if(nums[abs(nums[i])-1]>0)
                nums[abs(nums[i])-1]=-nums[abs(nums[i])-1];
            else
                res.push_back(abs(nums[i]));
            wrongSum+=abs(nums[i]);
        }
        
        return res; 
    }
};
