// 双指针，left表示左乘之积，right表示右乘之积
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int len=nums.size(),left=1,right=1;
        vector<int> res;
        for(int i=0;i<len;i++){
            // 放入当前左积(不包括自身)
            res.push_back(left);
            left*=nums[i];
        }
        
        for(int i=len-1;i>=0;i--){
            
            // 左积乘右积，即为所求res[i]
            res[i]*=right;
            right*=nums[i];
        }
        return res;
    }
};
