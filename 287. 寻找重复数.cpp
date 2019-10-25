class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
        int repeat;

        for(int i=0;i<nums.size();i++){
            if(nums[abs(nums[i])-1]>0)
                nums[abs(nums[i])-1]=-nums[abs(nums[i])-1];
            else
                repeat=abs(nums[i]);
        }
        return repeat;                   
        
    }
};
