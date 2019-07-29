class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
     
        // 两个位置,用两次二分解决.
        // 这道题实际再问这样一个问题:当序列中有多个key值时,如何找到符合要求的第一个key的位置.
        int left=0,right=nums.size()-1,mid;
        vector<int> res;
        while(left<=right)
        {
            mid=left+(right-left)/2;
            if(nums[mid]==target&&(nums[mid-1]!=target||mid==0)) //找到左边界
                break;
            else if(nums[mid]<target) 
                left=mid+1;
            else
                // nums[mid]>target和nums[mid]==target&&nums[mid-1]==target两种情况的处理方法都是right=mid-1;因此做了归并
                right=mid-1;
        }
        
        // 没找到key
        if(left>right)
        {
            res.push_back(-1);
            res.push_back(-1);
            return res;
        }
        res.push_back(mid);
        
        //重置left,right
        left=mid;
        right=nums.size()-1;
        while(left<=right)
        {
            mid=left+(right-left)/2;
            if(nums[mid]==target&&(nums[mid+1]!=target||mid==nums.size()-1)) //找到右边界
                break;
            else if(nums[mid]>target) 
                right=mid-1;
            else
                left=mid+1;
        }
        res.push_back(mid);
        return res;
    }
};
