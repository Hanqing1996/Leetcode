class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low=0,high=nums.size()-1,mid;
        while(low<=high)//对于一个升序序列，若未找到关键字，退出循环时的结果一定是low比high大1
        {
            mid=(low+high)/2;
            if(nums[mid]==target)
                break;
            else if(nums[mid]<target)
                low=mid+1;
            else
                high=mid-1;
        }
        if(low<=high)
            return mid;
        else 
            return low;//low至即为插入位置
    }
};
