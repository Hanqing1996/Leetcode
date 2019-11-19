class Solution {
public:
    bool canJump(vector<int>& nums) {
        int len=nums.size();
        int current=len-1;

        for(int i=len-2;i>=0;i--){
            // 能从current跳到i
            if(nums[i]>=(current-i)){
                current=i;
            }
        }
        return current==0;
    }
};
